import AWS from 'aws-sdk';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
import dotenv from 'dotenv';

dotenv.config();

let dynamodb = null;
let client = null;

if (process.env.NODE_ENV === 'local') {
  const options: ServiceConfigurationOptions = {
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
  };
  dynamodb = new AWS.DynamoDB(options);
  client = new AWS.DynamoDB.DocumentClient(options);
} else {
  dynamodb = new AWS.DynamoDB({ region: process.env.AWS_REGION });
  client = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION,
  });
}

function _chunkIt(array: any): any[] {
  const maxSize = 25;
  return array.reduce((acc, _, i) => (i % maxSize ? acc : [...acc, array.slice(i, i + maxSize)]), []);
}

function _unmarshall(data: any): any {
  return AWS.DynamoDB.Converter.unmarshall(data);
}

function _convertRecords(data: any): any {
  if (!data) return undefined;
  if (Array.isArray(data)) return _convertRecordsToArray(data);
  return _unmarshall(data);
}

function _convertRecordsToArray(data: any): any[] {
  if (!data) return undefined;
  return data.map(item => _unmarshall(item));
}

export async function executePartiQL(query: string): Promise<any[]> {
  const data = [];
  let nextTokenRun = null;
  do {
    const { Items, NextToken } = await dynamodb
      .executeStatement({
        Statement: query,
        NextToken: nextTokenRun,
      })
      .promise();

    data.push(...Items);
    nextTokenRun = NextToken;
  } while (nextTokenRun);
  return _convertRecords(data);
}

export async function batchWrite(tableName: string, array: any, newItem: boolean): Promise<void> {
  const chunks = _chunkIt(array);
  for (const chunk of chunks) {
    const items = chunk.map(data => {
      let item = null;
      const createAt = new Date().toISOString();
      const updateAt = new Date().toISOString();
      if (newItem) {
        item = {
          ...data,
          createAt: createAt,
          updateAt: updateAt,
        };
      } else {
        item = {
          ...data,
          updateAt: updateAt,
        };
      }
      return {
        PutRequest: {
          Item: item,
        },
      };
    });

    const params = {
      RequestItems: {
        [tableName]: items,
      },
    };
    await client.batchWrite(params).promise();
  }
}

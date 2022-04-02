import * as path from 'path';
import { batchWrite, executePartiQL } from '../../aws/dynamo';
import dataLoad from './data.loader';
import { transformDataToMovie } from './transform';

export async function ingestMovies(tableName: string): Promise<void> {
  const directory = path.resolve(__dirname, '../../../data/movies');
  console.log(`Loading data from ${directory}`);
  const data = dataLoad(directory);
  const movies = transformDataToMovie(data);
  console.log('Saving data to DynamoDB');
  await batchWrite(tableName, movies, true);
  const list = await executePartiQL(`SELECT * FROM ${tableName} WHERE "sk" = 'LANGUAGE#en' `);
  console.log(list);
}

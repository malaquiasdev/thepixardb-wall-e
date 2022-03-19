import * as path from 'path';
import { batchWrite } from '../../aws/dynamo';
import dataLoad from './data.loader';
import { transformDataToMovie } from './transform';

export async function ingestMovies(tableName: string): Promise<void> {
  const directory = path.resolve(__dirname, '../../../data/movies');
  const data = dataLoad(directory);
  const movies = transformDataToMovie(data);
  await batchWrite(tableName, movies, true);
}

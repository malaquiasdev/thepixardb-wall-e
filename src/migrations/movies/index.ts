import * as path from 'path';
import dataLoad from './data.loader';

const directory = path.resolve(__dirname, '../../../data/movies');
const data = dataLoad(directory);

console.log(data);

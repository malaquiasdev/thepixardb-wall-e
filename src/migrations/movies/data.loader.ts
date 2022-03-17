import * as fs from 'fs';
import { MovieData } from './movie.data';
import validate from './data.loader.validate';

function getDirNames(rootDir: string): string[] {
  return fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter(dir => dir.isDirectory)
    .map(dir => dir.name);
}

function getContents(rootDir: string, dirNames: string[]): MovieData[] {
  return dirNames
    .filter(name => !name.includes('.DS_Store'))
    .map(name => {
      const data = fs.readFileSync(`${rootDir}/${name}/content.json`);
      const content: MovieData = JSON.parse(data.toString());
      validate(content);
      return content;
    });
}

export default function dataLoad(rootDir: string): MovieData[] {
  try {
    const dirNames = getDirNames(rootDir);
    return getContents(rootDir, dirNames);
  } catch (err) {
    console.error(err);
  }
}

import { ingestMovies } from './migrations/movies/';

export async function handler() {
  await ingestMovies('thepixardb_movies');
}

(async () => {
  console.log('--- STARTING ----');
  await ingestMovies('thepixardb_movies');
  console.log(`--- FINISHED ----`);
})();

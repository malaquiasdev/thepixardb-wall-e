import { ingestMovies } from './migrations/movies/';

export async function handler() {
  await ingestMovies('thepixardb_movies');
}

(async () => {
  await handler();
})();

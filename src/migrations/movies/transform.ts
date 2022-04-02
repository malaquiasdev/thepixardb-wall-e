import { MovieData, Movie } from './movie';
import dataGenres from '../../../data/genres.json';

export function transformDataToMovie(contents: MovieData[]): Movie[] {
  const result: Movie[] = [];
  const keys = ['en', 'pt'];
  const imgBaseUrl = 'https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main';

  for (const content of contents) {
    for (const key of keys) {
      if (result.find(i => i.pk === content.id && i.sk === `LANGUAGE#${key}`)) {
        console.log(`Duplicate key ${content.id}`);
      }
      result.push({
        pk: content.id,
        sk: `LANGUAGE#${key}`,
        title: content.titles.find(t => t.key === key).value,
        description: content.descriptions.find(d => d.key === key).long,
        descriptionShort: content.descriptions.find(d => d.key === key).short,
        genres: dataGenres.filter(g => content.genreIds.find(i => i === g.id)).map(g => g[key]),
        budget: content.budget,
        revenue: content.revenue,
        releaseDate: content.releaseDate,
        runtime: content.runtime,
        rating: content.ages.find(r => r.key === key),
        externalId: content.externalId,
        images: content.images
          .filter(i => i.key === key || i.key === null)
          .map(i => {
            if (!i.path.includes(imgBaseUrl)) {
              i.path = `${imgBaseUrl}/${i.path}`;
            }
            return i;
          }),
      });
    }
  }

  return result;
}

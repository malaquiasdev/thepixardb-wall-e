import { MovieData } from './movie.data';

function validateId(content: MovieData): void {
  if (content.id && !(content.id.indexOf('MV') === 0) && !content.id.includes(content.externalId.imdb)) {
    throw new Error('ID_WRONG_PATTERN');
  }
}

function validateTitles(content: MovieData): void {
  if (!content.titles.length && content.titles.find(t => t.value === '')) {
    throw new Error('TITLES_EMPTY');
  }
}

function validateDescriptions(content: MovieData): void {
  if (!content.descriptions.length) {
    throw new Error('DESCRIPTIONS_EMPTY');
  }
  if (content.descriptions.find(d => !d.long.length || !d.short.length)) {
    throw new Error('DESCRIPTIONS_LONG_SHORT_EMPTY');
  }
}

function validateGenresId(content: MovieData): void {
  if (!content.genreIds.length) {
    throw new Error('GENRE_IDS_EMPTY');
  }
}

export default function validate(content: any): void {
  validateId(content);
  validateTitles(content);
  validateDescriptions(content);
  validateGenresId(content);
}

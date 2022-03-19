export type Title = {
  key: string;
  value: string;
};

export type Description = {
  key: string;
  short: string;
  long: string;
};

export type Age = {
  key: string;
  organ: string;
  value: string;
};

export type ExternalId = {
  themoviedb: number;
  imdb: string;
};

export type Images = {
  path: string;
  primary: boolean;
  key: string;
};

export type MovieData = {
  id: string;
  titles: Title[];
  descriptions: Description[];
  genreIds: number[];
  budget?: number;
  revenue?: number;
  releaseDate: string;
  runtime: number;
  ages: Age[];
  externalId: ExternalId;
  images: Images[];
};

export type Movie = {
  pk: string;
  sk: string;
  title: string;
  description: string;
  descriptionShort: string;
  genres: string[];
  budget?: number;
  revenue?: number;
  releaseDate: string;
  runtime: number;
  rating: Age;
  externalId: ExternalId;
  images: Images[];
};

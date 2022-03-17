export type Title = {
  key: string;
  value: string;
};

export type Description = {
  key: string;
  short: string;
  long: string;
};

export type Ages = {
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
  runTime: number;
  rating: Ages[];
  externalId: ExternalId;
  images: Images[];
};

export type ApiResponse = {
  data: ApiData;
};

type ApiData = {
  info: Info;
  results: ApiCharacter[];
};

type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
};

export type BasicCharacter = {
  id: number;
  name: string;
  status: string;
  location: string;
};

export type ExtendedCharacter = BasicCharacter & {
  species: string;
  type: string;
  gender: string;
  origin: string;
};

export type ApiCharacter = ExtendedCharacter & {
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Origin = {
  name: string;
  url: string;
};

import { ApiCharacter, ApiResponse } from "../../types/types";

export const apiCharacterMocked: ApiCharacter = {
  id: 1,
  name: "Rick Sanchez-test",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

export const apiCharactersMocked: ApiCharacter[] = [
  apiCharacterMocked,
  {
    id: 2,
    name: "Morty Smith-test",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z-test",
  },
];

export const apiMockedResponse: ApiResponse = {
  data: {
    info: {
      count: 2,
      pages: 1,
      next: "next-url",
      prev: null,
    },
    results: apiCharactersMocked,
  },
};
export const apiMockedResponseSecondPage: ApiResponse = {
  data: {
    info: {
      count: 2,
      pages: 1,
      next: "next-url",
      prev: null,
    },
    results: [apiCharactersMocked[1]],
  },
};

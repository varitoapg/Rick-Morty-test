import { BasicCharacter, ExtendedCharacter } from "../../types/types";

export const characterMocked: BasicCharacter = {
  id: 1,
  name: "Rick Sanchez-test",
  status: "Alive",
  location: "Earth",
};

export const charactersMocked: BasicCharacter[] = [
  characterMocked,
  {
    id: 2,
    name: "Morty Smith-test",
    status: "Alive",
    location: "Earth",
  },
];

export const extendedCharacterMocked: ExtendedCharacter = {
  id: 1,
  name: "Rick Sanchez-test",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: "Earth",
  location: "Earth",
};

export const extendedCharactersMocked: ExtendedCharacter[] = [
  extendedCharacterMocked,
  {
    id: 2,
    name: "Morty Smith-test",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: "Earth",
    location: "Earth",
  },
];

import {
  ApiCharacter,
  BasicCharacter,
  ExtendedCharacter,
} from "../../../types/types";

export const characterParser = (
  characters: ApiCharacter[]
): BasicCharacter[] => {
  const parsedCharacters: BasicCharacter[] = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      location: character.location.name,
    };
  });

  return parsedCharacters;
};

export const characterSumarizeParser = (
  characters: ApiCharacter[]
): ExtendedCharacter[] => {
  const parsedCharacters: ExtendedCharacter[] = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      location: character.location.name,
      species: character.species,
      gender: character.gender,
      origin: character.origin.name,
      type: character.type,
    };
  });

  return parsedCharacters;
};

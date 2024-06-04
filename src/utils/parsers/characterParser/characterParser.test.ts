import { describe, expect, it } from "vitest";
import { characterParser, characterSumarizeParser } from "./characterParser";
import {
  ApiCharacter,
  BasicCharacter,
  ExtendedCharacter,
} from "../../../types/types";
import { apiCharactersMocked } from "../../testUtils/apiCharactersMocked";
import {
  charactersMocked,
  extendedCharactersMocked,
} from "../../testUtils/charactersMocked";

describe("characterParser", () => {
  it("should parse an array of ApiCharacter objects into an array of Character objects", () => {
    const apiCharacters: ApiCharacter[] = apiCharactersMocked;

    const expectedCharacters: BasicCharacter[] = charactersMocked;

    const parsedCharacters = characterParser(apiCharacters);

    expect(parsedCharacters).toEqual(expectedCharacters);
  });

  it("should return an empty array if no characters are provided", () => {
    const apiCharacters: ApiCharacter[] = [];

    const parsedCharacters = characterParser(apiCharacters);

    expect(parsedCharacters).toEqual([]);
  });
});

describe("characterSumarizeParser", () => {
  it("should parse an array of ApiCharacter objects into an array of ExtendedCharacter objects", () => {
    const apiCharacters: ApiCharacter[] = apiCharactersMocked;

    const expectedCharacters: ExtendedCharacter[] = extendedCharactersMocked;

    const parsedCharacters = characterSumarizeParser(apiCharacters);

    expect(parsedCharacters).toEqual(expectedCharacters);
  });

  it("should return an empty array if no characters are provided", () => {
    const apiCharacters: ApiCharacter[] = [];

    const parsedCharacters = characterSumarizeParser(apiCharacters);

    expect(parsedCharacters).toEqual([]);
  });
});

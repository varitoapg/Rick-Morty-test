import { useState, useEffect } from "react";
import {
  ApiCharacter,
  BasicCharacter,
  ExtendedCharacter,
} from "../../types/types";
import { getAllCharacters } from "../../services/api/getAllCharacters/getAllCharacters";
import { getSomeCharacters } from "../../services/api/getSomeCharacters/getSomeCharacters";
import {
  characterParser,
  characterSumarizeParser,
} from "../../utils/parsers/characterParser/characterParser";

type UseFetchCharactersResult = {
  characters: BasicCharacter[];
  sumarizedCharacters: ExtendedCharacter[];
  nextPage: null | string;
  previousPage: null | string;
  isLoading: boolean;
  error: Error | null;
  setCharacters: React.Dispatch<React.SetStateAction<BasicCharacter[]>>;
};

export const useCharacters = (
  page: null | number = null
): UseFetchCharactersResult => {
  const [characters, setCharacters] = useState<BasicCharacter[]>([]);
  const [nextPage, setNextPage] = useState<null | string>(null);
  const [previousPage, setPreviousPage] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [sumarizedCharacters, setSumarizedCharacters] = useState<
    ExtendedCharacter[]
  >([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCharacters(page);

        setNextPage(data.info.next);
        setPreviousPage(data.info.prev);
        const parsedData = characterParser(data.results);
        setCharacters(parsedData);

        const sumarizedData = await getSomeCharacters();

        const parsedSumarizedData = characterSumarizeParser(
          sumarizedData as ApiCharacter[]
        );
        setSumarizedCharacters(parsedSumarizedData);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return {
    characters,
    sumarizedCharacters,
    isLoading,
    error,
    setCharacters,
    nextPage,
    previousPage,
  };
};

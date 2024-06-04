import { ReactNode, createContext, useContext, useState } from "react";
import { BasicCharacter, ExtendedCharacter } from "../../types/types";
import { useCharacters } from "../../hooks/useCharacters/useCharacters";

type CharacterProviderProps = {
  children: ReactNode;
};

export type CharacterContextValue = {
  characters: BasicCharacter[];
  sumarizedCharacters: ExtendedCharacter[];
  nextPage: null | string;
  previousPage: null | string;
  isLoading: boolean;
  error: Error | null;
  editCharacter: (id: number, updates: Partial<BasicCharacter>) => void;
  currentPage: null | number;
  goToPage: (page: number) => void;
};

export const initialCharacterContextValue: CharacterContextValue = {
  characters: [],
  sumarizedCharacters: [],
  nextPage: null,
  previousPage: null,
  isLoading: false,
  error: null,
  editCharacter: () => {},
  currentPage: null,
  goToPage: () => {},
};

export const CharacterContext = createContext<CharacterContextValue>(
  initialCharacterContextValue
);

export const useAllCharacters = () => {
  return useContext(CharacterContext);
};

export const CharacterProvider: React.FC<CharacterProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<null | number>(null);
  const {
    characters,
    sumarizedCharacters,
    setCharacters,
    isLoading,
    error,
    nextPage,
    previousPage,
  } = useCharacters(currentPage);

  const editCharacter = (id: number, updates: Partial<BasicCharacter>) => {
    setCharacters((prevCharacters) =>
      (prevCharacters ?? []).map((character) =>
        character.id === id ? { ...character, ...updates } : character
      )
    );
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        sumarizedCharacters,
        error,
        isLoading,
        editCharacter,
        goToPage,
        currentPage,
        nextPage,
        previousPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

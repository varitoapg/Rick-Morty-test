import { BasicCharacter } from "../../types/types";
import { CharacterCard } from "../CharacterCard/CharacterCard";

type CharacterListProps = {
  characters: BasicCharacter[];
};

export const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
};

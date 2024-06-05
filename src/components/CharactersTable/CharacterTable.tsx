import { ExtendedCharacter } from "../../types/types";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableRow } from "./TableRow/TableRow";

type CharacterTableProps = {
  characters: ExtendedCharacter[];
};

export const CharacterTable = ({ characters }: CharacterTableProps) => {
  return (
    <>
      <table className="min-w-full bg-white border border-gray-800 rounded-lg shadow-md">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {characters.map((character) => (
            <TableRow key={character.id} character={character} />
          ))}
        </tbody>
      </table>
    </>
  );
};

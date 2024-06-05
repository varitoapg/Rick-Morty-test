import { ExtendedCharacter } from "../../../types/types";
import { changeBackgroundByStatus } from "../../../utils/uiUtils/changeBackgroundByStatus.test/changeBackgroundByStatus";
import { changeColourTextByLocation } from "../../../utils/uiUtils/changeColourTextByLocation/changeColourTextByLocation";
import { TableRowCell } from "../TableRowCell/TableRowCell";

type TableRowProps = {
  character: ExtendedCharacter;
};

export const TableRow = ({ character }: TableRowProps) => {
  const textColor = changeColourTextByLocation(
    character.status,
    character.location
  );

  const backgroundColor = changeBackgroundByStatus(
    character.status,
    character.location
  );

  return (
    <tr key={character.id} className={backgroundColor}>
      <TableRowCell characteristic={character.name} textColor={textColor} />
      <TableRowCell characteristic={character.status} textColor={textColor} />
      <TableRowCell characteristic={character.location} textColor={textColor} />
      <TableRowCell characteristic={character.species} textColor={textColor} />
      <TableRowCell
        characteristic={character.type ? character.type : "Unknown"}
        textColor={textColor}
      />
      <TableRowCell characteristic={character.gender} textColor={textColor} />
      <TableRowCell characteristic={character.origin} textColor={textColor} />
    </tr>
  );
};

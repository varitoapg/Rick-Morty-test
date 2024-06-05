type TableRowCellProps = {
  characteristic: string;
  textColor: string;
};

export const TableRowCell = ({
  characteristic,
  textColor,
}: TableRowCellProps) => {
  return (
    <td
      className={`py-2 border-b ${textColor} sm:px-2 md:px-3 lg:px-4 xl:px-5`}
    >
      {characteristic}
    </td>
  );
};

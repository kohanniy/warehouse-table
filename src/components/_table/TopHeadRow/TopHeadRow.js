import { TableRow } from '@mui/material';
import { TableCellStyled } from './styles';

function TopHeadRow() {
  return (
    <TableRow>
      <TableCellStyled colSpan={3} />
      <TableCellStyled align='center' colSpan={2}>
        Количество
      </TableCellStyled>
      <TableCellStyled />
      <TableCellStyled align='center' colSpan={3}>
        Таможенные склады
      </TableCellStyled>
      <TableCellStyled align='center' colSpan={2}>
        Им 40
      </TableCellStyled>
      <TableCellStyled colSpan={4} />
    </TableRow>
  );
}

export default TopHeadRow;

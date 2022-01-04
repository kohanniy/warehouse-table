import { TableRow } from '@mui/material';
import { TableCellStyled } from './styles';
import Checkbox from '../Checkbox';
import { columns } from '../../../utils/constants';

function BottomHeadRow({ numSelected, rowCount, onSelectAllClick }) {
  return (
    <TableRow>
      <TableCellStyled padding='checkbox' align='center'>
        <Checkbox
          color='primary'
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          // onChange={onSelectAllClick}
        />
      </TableCellStyled>
      {columns.map((column) => (
        <TableCellStyled align='center' key={column.id}>
          {column.label}
        </TableCellStyled>
      ))}
    </TableRow>
  );
}

export default BottomHeadRow;

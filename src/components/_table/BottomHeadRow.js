import { TableRow, TableCell, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { columns } from '../../utils/constants';

const StyledCell = styled(TableCell)(( { theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.common.white,
  fontSize: '14px',
  outline: '1px solid #ffffff',
  padding: '5px 16px 5px 16px',
  // paddingTop: '5px',
  // paddingBottom: '5px',
  lineHeight: 1.5,
}));

function BottomHeadRow({ numSelected, rowCount, onSelectAllClick }) {
  return (
    <TableRow>
      <StyledCell padding='checkbox' sx={{ p: 0 }}>
        <Checkbox
          color='primary'
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          inputProps={{
            'aria-label': 'select all desserts',
          }}
        />
      </StyledCell>
      {columns.map((column) => (
        <StyledCell align='center' key={column.id}>
          {column.label}
        </StyledCell>
      ))}
    </TableRow>
  );
}

export default BottomHeadRow;

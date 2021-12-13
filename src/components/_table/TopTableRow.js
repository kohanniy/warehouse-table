import { TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCell = styled(TableCell)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.grey[600]}`,
  padding: '8px 0',
}));

function TopTableRow() {
  return (
    <TableRow>
      <StyledCell colSpan={2} />
      <StyledCell align='center' colSpan={2}>Количество</StyledCell>
      <StyledCell />
      <StyledCell align='center' colSpan={3}>Таможенные склады</StyledCell>
      <StyledCell align='center' colSpan={2}>Им 40</StyledCell>
    </TableRow>
  );
}

export default TopTableRow;

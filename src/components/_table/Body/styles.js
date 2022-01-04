import { TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TableRowStyled = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.focus,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  padding: '12px 5px',
  fontSize: '12px',
}));

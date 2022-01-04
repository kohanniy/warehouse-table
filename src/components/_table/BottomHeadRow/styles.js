import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '14px',
  padding: '8px 5px',
  lineHeight: 1.2,
}));

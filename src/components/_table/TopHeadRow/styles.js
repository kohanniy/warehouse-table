import { TableCell } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  padding: `${theme.spacing(1)} 0`,
  fontWeight: 400,
  fontSize: '12px',
  border: `1px solid ${alpha(theme.palette.common.black, 0.12)}`
}));

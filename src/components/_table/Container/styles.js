import { TableContainer } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}))
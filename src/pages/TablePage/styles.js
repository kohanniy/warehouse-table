import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const Section = styled(Container)(({ theme }) => ({
  flexGrow: 1,
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}));



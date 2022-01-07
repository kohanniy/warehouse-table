import { Box, Paper, Stack } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const StackStyled = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  alignItems: 'center',
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: '30px 15px',
  borderRadius: '10px',
  border: `1px solid ${alpha(theme.palette.common.black, 0.5)}`,
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(3),
  alignItems: 'center',
}));

export const Form = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
}));

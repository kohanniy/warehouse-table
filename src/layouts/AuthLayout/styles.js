import { Toolbar, Link, Box, Container } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: theme.transitions.create('color'),

  '@media (hover: hover)': {
    '&:hover': {
      color: alpha(theme.palette.text.primary, 0.4),
    },
  },
}));

export const Main = styled(Box)({
  flexGrow: 1,
  display: 'flex',
});

export const Section = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

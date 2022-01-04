import { Toolbar } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const ToolbarStyled = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'numSelected',
})(({ numSelected, theme }) => ({
  padding: 0,
  justifyContent: 'space-between',
  flexDirection: 'column',
  flexShrink: 0,
  gap: '10px',
  paddingBottom: '10px',

  [theme.breakpoints.up('sm')]: {
    padding: 0,
    flexDirection: 'row',
  },

  ...(numSelected > 0 && {
    backgroundColor: (theme) =>
      alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
  }),
}));

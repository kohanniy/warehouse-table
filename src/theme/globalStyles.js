import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

const GlobalStyles = () => (
  <GlobalThemeStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      '#root': {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
    }}
  />
);

export default GlobalStyles;

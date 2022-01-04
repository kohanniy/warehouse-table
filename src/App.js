import React from 'react';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import TablePage from './pages/TablePage';


function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <TablePage />
    </ThemeConfig>
  );
}

export default App;

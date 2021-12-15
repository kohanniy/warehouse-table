import React from 'react';
import { styled } from '@mui/material/styles';

import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

import Table from './components/_table';

const RootContainer = styled('main')({
  flexGrow: 1,
});

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <RootContainer>
        <Table />
      </RootContainer>
    </ThemeConfig>
  );
}

export default App;

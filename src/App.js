import React from 'react';
import { styled } from '@mui/material/styles';
import { useQuery } from 'react-query';

import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

import Table from './components/_table';

import { getData } from './firebase';
import { useProductsQuery } from './hooks/useProductsQuery';

const RootContainer = styled('main')({
  flexGrow: 1,
  display: 'flex',
});

function App() {

  return (
    <ThemeConfig>
      <GlobalStyles />
      <RootContainer>
        <Table />
        {/* {status === 'loading' && <div>Загрузка...</div>}
        {error && <div>{error.message}</div>}
        {products && <Table /> } */}
      </RootContainer>
    </ThemeConfig>
  );
}

export default App;

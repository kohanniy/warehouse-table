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
});

function App() {
  const {status, error, data: products} = useProductsQuery();
  // const query = useQuery('products', ({ queryKey }) => getData(queryKey[0]));
  console.log(products);

  return (
    <ThemeConfig>
      <GlobalStyles />
      <RootContainer>
        {status === 'loading' && <div>Загрузка...</div>}
        {error && <div>{error.message}</div>}
        {products && <Table products={products} /> }
      </RootContainer>
    </ThemeConfig>
  );
}

export default App;

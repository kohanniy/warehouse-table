import { useEffect, useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { CircularProgress, Table as MuiTable, TableHead, Typography } from '@mui/material';
import TopHeadRow from './TopHeadRow';
import BottomHeadRow from './BottomHeadRow';
import Container from './Container';
import Body from './Body';
import { useGetProducts } from '../../hooks/productsHooks';
import { generateProductData } from '../../utils/utils';
import { productsListener } from '../../firebase';

const mAuto = { m: 'auto ' };

const Table = () => {
  const { data: products, status, error } = useGetProducts();

  const queryClient = useQueryClient();

  const updateCacheAfterAddingProduct = useCallback(
    (doc) =>
      queryClient.setQueryData('getProducts', (oldData) => [generateProductData(doc), ...oldData]),
    [queryClient]
  );

  const updateCacheAfterDeletingProduct = useCallback(
    (doc) => {
      queryClient.setQueryData('getProducts', (oldData) =>
        oldData.filter((item) => item.id !== doc.id)
      );
    },
    [queryClient]
  );

  useEffect(() => {
    const listener = productsListener(
      updateCacheAfterAddingProduct,
      updateCacheAfterDeletingProduct
    );

    return () => listener();
  }, [updateCacheAfterAddingProduct, updateCacheAfterDeletingProduct]);

  return (
    <Container>
      <MuiTable stickyHeader>
        <TableHead>
          <TopHeadRow />
          <BottomHeadRow />
        </TableHead>
        {status === 'success' && products.length > 0 && <Body products={products} />}
      </MuiTable>
      {status === 'loading' && <CircularProgress sx={mAuto} />}
      {status === 'error' && (
        <Typography sx={{ ...mAuto, color: 'error.main' }}>{error.message}</Typography>
      )}
      {status === 'success' && products.length === 0 && (
        <Typography sx={mAuto}>В базе данных нет товаров</Typography>
      )}
    </Container>
  );
};

export default Table;

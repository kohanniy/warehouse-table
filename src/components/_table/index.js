import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { CircularProgress, Table as MuiTable, TableHead, Typography } from '@mui/material';
import TopHeadRow from './TopHeadRow';
import BottomHeadRow from './BottomHeadRow';
import Container from './Container';
import Body from './Body';
import { useGetProducts } from '../../hooks/productsHooks';
import { generateProductData } from '../../utils/utils';
import { productsListener } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import { selectRows } from '../../app/slices/rowsSlice';

const mAuto = { m: 'auto ' };

const Table = () => {
  const { data: products, status, error } = useGetProducts();

  const { selected } = useAppSelector(selectRows);

  const queryClient = useQueryClient();

  const afterUpdatingProduct = (doc) => (oldData) => {
    const updatedProductIndex = oldData.findIndex((item) => item.id === doc.id);
    oldData[updatedProductIndex] = { ...oldData[updatedProductIndex], ...doc.data() };
    return oldData;
  };

  const afterAddingProduct = (doc) => (oldData) => [generateProductData(doc), ...oldData];

  const afterDeletingProduct = (doc) => (oldData) => {
    const newData = oldData.filter((item) => item.id !== doc.id);
    return newData;
  };

  // listener to update the database
  useEffect(() => {
    const modifiedFn = (doc) =>
      queryClient.setQueryData(
        'getProducts',
        selected.length === 1 ? afterUpdatingProduct(doc) : afterAddingProduct(doc)
      );

    const removedFn = (doc) => queryClient.setQueryData('getProducts', afterDeletingProduct(doc));

    const listener = productsListener(modifiedFn, removedFn);

    return () => listener();
  }, [queryClient, selected.length]);

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

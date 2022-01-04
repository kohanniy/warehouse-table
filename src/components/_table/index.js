import { useState, useEffect } from 'react';

import { onSnapshot } from 'firebase/firestore';
import { productsRef } from '../../firebase';
import { sortProductData } from '../../utils/constants';

import {
  CircularProgress,
  // Button,
  Table as MuiTable,
  TableHead,
  Typography,
} from '@mui/material';

import TopHeadRow from './TopHeadRow';
import BottomHeadRow from './BottomHeadRow';
import DialogForm from '../DialogForm';
import Snackbar from '../Snackbar';
import Container from './Container';
import Body from './Body';
import { useGetProducts } from '../../hooks/productsHooks';
// import CircularProgress from '../CircularProgress';

const mAuto = { m: 'auto ' };

const Table = ({ numSelected, isRowSelected }) => {
  const { data: products, status, error } = useGetProducts();
  // const queryClient = useQueryClient();

  // const { status, error, data: products } = useGetProducts();

  // const { error: mutationError, mutate, status: mutationStatus } = useAddProduct();

  // const [dialogOpen, setDialogOpen] = useState(false);

  // const [snackbarOpen, setSnackbarOpen] = useState(false);

  // const openDialog = () => setDialogOpen(true);

  // const closeDialog = () => setDialogOpen(false);

  // const openSnackbar = () => setSnackbarOpen(true);

  // const closeSnackbar = () => setSnackbarOpen(false);

  // const mutation = (data, resetFormFn) => {
  //   mutate(data, {
  //     onSuccess: () => {
  //       closeDialog();
  //       openSnackbar();
  //       resetFormFn();
  //     },
  //     onError: () => {
  //       closeDialog();
  //       openSnackbar();
  //       resetFormFn();
  //     },
  //   });
  // };

  // useEffect(() => {
  //   const productsListener = onSnapshot(
  //     productsRef,
  //     (snapshot) => {
  //       snapshot.docChanges().forEach((change) => {
  //         // if (change.type === 'added') {
  //         //   console.log('defaults', queryClient.setQueryDefaults('getProducts'));

  //         //   // queryClient.invalidateQueries('getProducts');
  //         //   console.log('New city: ', sortProductData(change.doc));
  //         // }
  //         if (change.type === 'modified') {
  //           queryClient.setQueryData('getProducts', (oldData) => [
  //             sortProductData(change.doc),
  //             ...oldData,
  //           ]);
  //           console.log('Modified city: ', change.doc.data());
  //         }
  //         if (change.type === 'removed') {
  //           console.log('Removed city: ', change.doc.data());
  //         }
  //       });
  //     },
  //     (error) => {
  //       // ...
  //     }
  //   );

  //   return () => productsListener();
  // }, [queryClient]);

  return (
    <Container>
      <MuiTable stickyHeader>
        <TableHead>
          <TopHeadRow />
          <BottomHeadRow />
        </TableHead>
        {status === 'success' && products.length > 0 && (
          <Body products={products} isRowSelected={isRowSelected} />
        )}
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

{
  /* <DialogForm
        open={dialogOpen}
        onClose={closeDialog}
        mutationFn={mutation}
        status={mutationStatus}
      />
      <Snackbar open={snackbarOpen} onClose={closeSnackbar} error={mutationError} />
      <TableToolbar numSelected={selected.length} addButtonClick={openDialog} /> */
}

// {
//   status === 'loading' && <Box>Загрузка...</Box>;
// }
// {
//   error && status !== 'loading' && <Box>{error.message}</Box>;
// }
// {
//   mutationError && <Box>{mutationError.message}</Box>;
// }
// {
//   products && products.length === 0 && <Box>В базе данных нет товаров</Box>;
// }

// https://codesandbox.io/s/material-ui-editable-tables-wsp0c

// https://www.geeksforgeeks.org/how-to-create-an-editable-table-with-add-delete-and-search-filter-using-reactjs/

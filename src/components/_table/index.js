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

const Table = ({ numSelected }) => {
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

  // // checkbox
  // const [selected, setSelected] = useState([]);
  // // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = products.map((product) => product.id);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Container>
      <MuiTable stickyHeader>
        <TableHead>
          <TopHeadRow />
          <BottomHeadRow
            numSelected={numSelected}
            rowCount={products ? products.length : 0}
            // onSelectAllClick={handleSelectAllClick}
          />
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

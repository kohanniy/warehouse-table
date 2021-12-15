import { useState, useEffect } from 'react';

import { onSnapshot } from 'firebase/firestore';
import { productsRef } from '../../firebase';
import { sortProductData } from '../../utils/constants';

import {
  Box,
  // Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Checkbox,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import DoneIcon from '@mui/icons-material/Done';
// import ClearIcon from '@mui/icons-material/Clear';

import TableLayout from './TableLayout';
import TopHeadRow from './TopHeadRow';
import BottomHeadRow from './BottomHeadRow';
import DialogForm from '../DialogForm';
import Snackbar from '../Snackbar';
import TableToolbar from './TableToolbar';

import { useAddProduct, useGetProducts } from '../../hooks/productsHooks';
import { useQueryClient } from 'react-query';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '12px',
}));

function AppTable() {
  const queryClient = useQueryClient();

  const { status, error, data: products } = useGetProducts();

  const { error: mutationError, mutate, status: mutationStatus } = useAddProduct();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);

  const closeDialog = () => setDialogOpen(false);

  const openSnackbar = () => setSnackbarOpen(true);

  const closeSnackbar = () => setSnackbarOpen(false);

  const mutation = (data, resetFormFn) => {
    mutate(data, {
      onSuccess: () => {
        closeDialog();
        openSnackbar();
        resetFormFn();
      },
      onError: () => {
        closeDialog();
        openSnackbar();
        resetFormFn();
      },
    });
  };

  useEffect(() => {
    const productsListener = onSnapshot(
      productsRef,
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          // if (change.type === 'added') {
          //   console.log('defaults', queryClient.setQueryDefaults('getProducts'));

          //   // queryClient.invalidateQueries('getProducts');
          //   console.log('New city: ', sortProductData(change.doc));
          // }
          if (change.type === 'modified') {
            queryClient.setQueryData('getProducts', (oldData) => [
              sortProductData(change.doc),
              ...oldData,
            ]);
            console.log('Modified city: ', change.doc.data());
          }
          if (change.type === 'removed') {
            console.log('Removed city: ', change.doc.data());
          }
        });
      },
      (error) => {
        // ...
      }
    );

    return () => productsListener();
  }, [queryClient]);

  // checkbox
  const [selected, setSelected] = useState([]);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = products.map((product) => product.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

    const handleClick = (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <TableLayout>
      <DialogForm
        open={dialogOpen}
        onClose={closeDialog}
        mutationFn={mutation}
        status={mutationStatus}
      />
      <Snackbar open={snackbarOpen} onClose={closeSnackbar} error={mutationError} />
      <TableToolbar numSelected={selected.length} addButtonClick={openDialog} />
      <TableContainer sx={{ maxHeight: '600px' }} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TopHeadRow />
            <BottomHeadRow
              numSelected={selected.length}
              rowCount={products?.length}
              onSelectAllClick={handleSelectAllClick}
            />
          </TableHead>
          <TableBody>
            {products &&
              products.length !== 0 &&
              products.map((product) => {
                const isItemSelected = isSelected(product.id);

                return (
                  <StyledTableRow
                    key={product.id}
                    hover
                    onClick={(event) => handleClick(event, product.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >
                    <StyledTableCell padding='checkbox' sx={{ p: 0 }}>
                      <Checkbox color='primary' checked={isItemSelected} />
                    </StyledTableCell>
                    {Object.keys(product).map((item) => {
                      if (item === 'id') {
                        return null;
                      }

                      return (
                        <StyledTableCell align='center' key={item}>
                          {product[item]}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {status === 'loading' && <Box>Загрузка...</Box>}
      {error && status !== 'loading' && <Box>{error.message}</Box>}
      {mutationError && <Box>{mutationError.message}</Box>}
      {products && products.length === 0 && <Box>В базе данных нет товаров</Box>}
    </TableLayout>
  );
}

export default AppTable;

// https://codesandbox.io/s/material-ui-editable-tables-wsp0c

// https://www.geeksforgeeks.org/how-to-create-an-editable-table-with-add-delete-and-search-filter-using-reactjs/

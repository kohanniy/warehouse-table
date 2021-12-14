import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { DataGrid } from '@mui/x-data-grid';
import {
  Box,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Container,
  TableContainer,
  Paper,
  Input,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

import TableLayout from './TableLayout';
import TopTableRow from './TopTableRow';
import BottomTableRow from './BottomTableRow';
import DialogForm from '../DialogForm';

import { useProductsQuery } from '../../hooks/useProductsQuery';

const columns = [
  {
    id: 'name',
    label: 'Наименование',
  },
  {
    id: 'package',
    label: 'Упаковка',
  },
  {
    id: 'quantityDoc',
    label: 'По документам (кг)',
  },
  {
    id: 'quantityActual',
    label: 'Фактически (кг)',
  },
  {
    id: 'arrivalDate',
    label: 'Дата прихода',
  },
  {
    id: 'orionBW',
    label: 'Орион (кг)',
  },
  {
    id: 'logistcks',
    label: 'Логистика (кг)',
  },
  {
    id: 'petrochemBW',
    label: 'Petrochem (кг)',
  },
  {
    id: 'tashkent',
    label: 'Ташкент (кг)',
  },
  {
    id: 'bukhara',
    label: 'Бухара (кг)',
  },
  {
    id: 'recipient',
    label: 'Получатель',
  },
  {
    id: 'buyer',
    label: 'Покупатель',
  },
  {
    id: 'purchaseQuantity',
    label: 'Купил (кг)',
  },
  {
    id: 'balance',
    label: 'Остаток (кг)',
  },
];

// data

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
  const { status, error, data: products } = useProductsQuery();
  const [dialogOpen, setOpenDialog] = React.useState(false);
  console.log(products);

  const openDialog = () => setOpenDialog(true);
  const closeDialog = () => setOpenDialog(false)

  return (
    <TableLayout>
      <Button variant='contained' onClick={openDialog}>
        Добавить товар
      </Button>
      <DialogForm open={dialogOpen} onClose={closeDialog} />
      <TableContainer component={Paper} sx={{ width: 1 }}>
        <Table sx={{ width: 1 }}>
          <TableHead>
            <TopTableRow />
            <BottomTableRow />
          </TableHead>
          <TableBody>
            {products &&
              products.length !== 0 &&
              products.map((product) => {
                return (
                  <StyledTableRow key={product.id}>
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
      {error && <Box>{error.message}</Box>}
      {products && products.length === 0 && (
        <Box>
          В базе данных нет товаров
        </Box>
      )}
    </TableLayout>
  );
}

export default AppTable;

// https://codesandbox.io/s/material-ui-editable-tables-wsp0c

// https://www.geeksforgeeks.org/how-to-create-an-editable-table-with-add-delete-and-search-filter-using-reactjs/

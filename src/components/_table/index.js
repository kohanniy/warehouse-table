import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

import TableLayout from './TableLayout';
import TopTableRow from './TopTableRow';
import BottomTableRow from './BottomTableRow';

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





// styles
// const rootStyles = {
//   '& > *': {
//     borderBottom: 'unset',
//   },
// };

// const tableStyles = {
//   minWidth: 650,
// };

// const snackBarStyles = {
//   bottom: '104px',
// };

function AppTable({ products }) {
  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([{ id: 1, firstname: '', lastname: '', city: '' }]);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        firstname: '',
        lastname: '',
        city: '',
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log('saved : ', rows);
    setDisable(true);
    setOpen(true);
  };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };

  return (
    <TableLayout>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TopTableRow />
            <BottomTableRow />
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell align='center'>{product.name}</StyledTableCell>
                <StyledTableCell align='center'>{product.package}</StyledTableCell>
                <StyledTableCell align='center'>{product.quantityDoc}</StyledTableCell>
                <StyledTableCell align='center'>{product.quantityActual}</StyledTableCell>
                <StyledTableCell align='center'>{product.arrivalDate}</StyledTableCell>
                <StyledTableCell align='center'>{product.orionBW}</StyledTableCell>
                <StyledTableCell align='center'>{product.logistics}</StyledTableCell>
                <StyledTableCell align='center'>{product.petrochemBW}</StyledTableCell>
                <StyledTableCell align='center'>{product.tashkent}</StyledTableCell>
                <StyledTableCell align='center'>{product.bukhara}</StyledTableCell>
                <StyledTableCell align='center'>{product.recipient}</StyledTableCell>
                <StyledTableCell align='center'>{product.buyer}</StyledTableCell>
                <StyledTableCell align='center'>{product.purchaseQuantity}</StyledTableCell>
                <StyledTableCell align='center'>{product.balance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        sx={snackBarStyles}
      >
        <Alert onClose={handleClose} severity='success'>
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={1}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            {isEdit ? (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                {rows.length !== 0 && (
                  <div>
                    {disable ? (
                      <Button disabled align='right' onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    ) : (
                      <Button align='right' onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                <Button align='right' onClick={handleEdit}>
                  <CreateIcon />
                  EDIT
                </Button>
              </div>
            )}
          </div>
        </div>
        <TableRow align='center'></TableRow>

        <MuiTable sx={tableStyles} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align='center'>City</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <div>
                  <TableRow>
                    {isEdit ? (
                      <div>
                        <TableCell padding='none'>
                          <input
                            value={row.firstname}
                            name='firstname'
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell padding='none'>
                          <input
                            value={row.lastname}
                            name='lastname'
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell padding='none'>
                          <select
                            style={{ width: '100px' }}
                            name='city'
                            value={row.city}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option value=''></option>
                            <option value='Karanja'>Karanja</option>
                            <option value='Hingoli'>Hingoli</option>
                            <option value='Bhandara'>Bhandara</option>
                            <option value='Amaravati'>Amaravati</option>
                            <option value='Pulgaon'>Pulgaon</option>
                          </select>
                        </TableCell>
                      </div>
                    ) : (
                      <div>
                        <TableCell component='th' scope='row'>
                          {row.firstname}
                        </TableCell>
                        <TableCell component='th' scope='row'>
                          {row.lastname}
                        </TableCell>
                        <TableCell component='th' scope='row' align='center'>
                          {row.city}
                        </TableCell>
                        <TableCell component='th' scope='row' align='center'></TableCell>
                      </div>
                    )}
                    {isEdit ? (
                      <Button className='mr10' onClick={handleConfirm}>
                        <ClearIcon />
                      </Button>
                    ) : (
                      <Button className='mr10' onClick={handleConfirm}>
                        <DeleteOutlineIcon />
                      </Button>
                    )}
                    {showConfirm && (
                      <div>
                        <Dialog
                          open={showConfirm}
                          onClose={handleNo}
                          aria-labelledby='alert-dialog-title'
                          aria-describedby='alert-dialog-description'
                        >
                          <DialogTitle id='alert-dialog-title'>{'Confirm Delete'}</DialogTitle>
                          <DialogContent>
                            <DialogContentText id='alert-dialog-description'>
                              Are you sure to delete
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => handleRemoveClick(i)} color='primary' autoFocus>
                              Yes
                            </Button>
                            <Button onClick={handleNo} color='primary' autoFocus>
                              No
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    )}
                  </TableRow>
                </div>
              );
            })}
          </TableBody>
        </MuiTable>
      </Box> */}
    </TableLayout>
  );
}

export default AppTable;

// https://codesandbox.io/s/material-ui-editable-tables-wsp0c

// https://www.geeksforgeeks.org/how-to-create-an-editable-table-with-add-delete-and-search-filter-using-reactjs/

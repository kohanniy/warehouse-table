import { useState } from 'react';
import { Main, Section, PaperStyled } from './styles';
import { useAddProduct, useDeleteProduct } from '../../hooks/productsHooks';
import Table from '../../components/_table';
import Toolbar from '../../components/Toolbar';
import DialogForm from '../../components/DialogForm';
import Snackbar from '../../components/Snackbar';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { changeSelectedRows, selectRows } from '../../app/slices/rowsSlice';
import { Typography } from '@mui/material';

const TablePage = () => {
  const { selected } = useAppSelector(selectRows);
  const dispatch = useAppDispatch();

  const {
    error: addProductError,
    mutate: addProductMutate,
    status: addProductStatus,
  } = useAddProduct();

  const {
    error: deleteProductError,
    mutate: deleteProductMutate,
    status: deleteProductStatus,
  } = useDeleteProduct();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const afterAddProductActions = (resetFormFn) => {
    setDialogOpen(false);
    setSnackbarOpen(true);
    resetFormFn();
  };

  const afterDeleteProductActions = () => {
    setConfirmDialogOpen(false);
    setSnackbarOpen(true);
  };

  const addProduct = (data, resetFormFn) => {
    addProductMutate(data, {
      onSuccess: () => afterAddProductActions(resetFormFn),
      onError: () => afterAddProductActions(resetFormFn),
    });
  };

  const handleCancelBtnClick = () => {
    setConfirmDialogOpen(false);
    dispatch(changeSelectedRows([]));
  };

  const handleConfirmBtnClick = () => {
    selected.map((id) => {
      return deleteProductMutate(id, {
        onSuccess: () => afterDeleteProductActions(),
        onError: () => afterDeleteProductActions(),
      });
    });
    dispatch(changeSelectedRows([]));
  };

  return (
    <Main component='main'>
      <Section component='section' maxWidth='xl'>
        <PaperStyled elevation={0}>
          <Toolbar
            addBtnClick={() => setDialogOpen(true)}
            deleteBtnClick={() => setConfirmDialogOpen(true)}
          />
          {addProductError || deleteProductError ? (
            <Typography>{addProductError.message || deleteProductError.message}</Typography>
          ) : (
            <Table />
          )}
        </PaperStyled>
        <DialogForm
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          mutationFn={addProduct}
          status={addProductStatus}
        />
        <ConfirmDialog
          open={confirmDialogOpen}
          onCancelBtnClick={handleCancelBtnClick}
          onConfirmBtnClick={handleConfirmBtnClick}
          status={deleteProductStatus}
        />
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          error={addProductError || deleteProductError}
        />
      </Section>
    </Main>
  );
};

export default TablePage;

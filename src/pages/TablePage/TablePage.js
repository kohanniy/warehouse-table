import { useState } from 'react';
import { Main, Section, PaperStyled } from './styles';
import { useAddProduct, useDeleteProduct, useUpdateProduct } from '../../hooks/productsHooks';
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

  const {
    error: updateProductError,
    mutate: updateProductMutate,
    status: updateProductStatus,
  } = useUpdateProduct();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const afterAddOrUpdateProductActions = (resetFormFn) => {
    if (selected.length === 1) {
      dispatch(changeSelectedRows([]));
    }
    setDialogOpen(false);
    setSnackbarOpen(true);
    resetFormFn();
  };

  const afterDeleteProductActions = () => {
    setConfirmDialogOpen(false);
    setSnackbarOpen(true);
    dispatch(changeSelectedRows([]));
  };

  const mutateOptions = (resetFormFn) => ({
    onSuccess: () => afterAddOrUpdateProductActions(resetFormFn),
    onError: () => afterAddOrUpdateProductActions(resetFormFn),
  });

  const addOrUpdateProduct = (data, resetFormFn) => {
    if (selected.length === 1) {
      const id = selected[0];
      updateProductMutate({ id, data }, mutateOptions(resetFormFn));
    } else {
      addProductMutate(data, mutateOptions(resetFormFn));
    }
  };

  const handleCancelBtnClick = () => {
    setConfirmDialogOpen(false);
    dispatch(changeSelectedRows([]));
  };

  const handleConfirmDeleteBtnClick = () => {
    selected.forEach((id) => {
      deleteProductMutate(id, {
        onSuccess: () => afterDeleteProductActions(),
        onError: () => afterDeleteProductActions(),
      });
    });
  };

  return (
    <Main component='main'>
      <Section component='section' maxWidth='xl'>
        <PaperStyled elevation={0}>
          <Toolbar
            addBtnClick={() => setDialogOpen(true)}
            deleteBtnClick={() => setConfirmDialogOpen(true)}
            editBtnClick={() => setDialogOpen(true)}
          />
          {addProductError || deleteProductError || updateProductError ? (
            <Typography sx={{ color: 'error.main', m: 'auto' }}>
              {addProductError.toString() ||
                deleteProductError.toString() ||
                updateProductError.toString()}
            </Typography>
          ) : (
            <Table />
          )}
        </PaperStyled>
        <DialogForm
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          mutationFn={addOrUpdateProduct}
          status={selected.length === 1 ? updateProductStatus : addProductStatus}
        />
        <ConfirmDialog
          open={confirmDialogOpen}
          onCancelBtnClick={handleCancelBtnClick}
          onConfirmBtnClick={handleConfirmDeleteBtnClick}
          status={deleteProductStatus}
        />
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          error={addProductError || deleteProductError || updateProductError}
        />
      </Section>
    </Main>
  );
};

export default TablePage;

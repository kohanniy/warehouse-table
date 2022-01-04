import { useCallback, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { onSnapshot } from 'firebase/firestore';
import { Main, Section, PaperStyled } from './styles';
import { useAddProduct } from '../../hooks/productsHooks';
import { productsRef } from '../../firebase';
import Table from '../../components/_table';
import Toolbar from '../../components/Toolbar';
import DialogForm from '../../components/DialogForm';
import Snackbar from '../../components/Snackbar';
import { generateProductData } from '../../utils/utils';

const TablePage = () => {
  // const { data: products, status, error } = useGetProducts();
  const queryClient = useQueryClient();

  const {
    error: addProductError,
    mutate: addProductMutate,
    status: addProductStatus,
  } = useAddProduct();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const afterMutationActions = (resetFormFn) => {
    setDialogOpen(false);
    setSnackbarOpen(true);
    resetFormFn();
  };

  const addProduct = (data, resetFormFn) => {
    addProductMutate(data, {
      onSuccess: () => afterMutationActions(resetFormFn),
      onError: () => afterMutationActions(resetFormFn),
    });
  };

  const updateCacheAfterAddingProduct = useCallback(
    (doc) =>
      queryClient.setQueryData('getProducts', (oldData) => [generateProductData(doc), ...oldData]),
    [queryClient]
  );

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
            updateCacheAfterAddingProduct(change.doc);
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
  }, [updateCacheAfterAddingProduct]);

  return (
    <Main component='main'>
      <Section component='section' maxWidth='xl'>
        <PaperStyled elevation={0}>
          <Toolbar addButtonClick={() => setDialogOpen(true)} />
          <Table />
        </PaperStyled>
        <DialogForm
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          mutationFn={addProduct}
          status={addProductStatus}
        />
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          error={addProductError}
        />
      </Section>
    </Main>
  );
};

export default TablePage;

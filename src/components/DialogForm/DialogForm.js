import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DialogTitle, DialogActions, Button, Box } from '@mui/material';
import { DialogStyled, DialogContentStyled } from './styles';
import Input from '../Input';
import { inputsData } from '../../utils/constants';
import ConfirmButton from '../ConfirmButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeSelectedRows, selectRows } from '../../app/slices/rowsSlice';
import { useGetProducts } from '../../hooks/productsHooks';

const DialogForm = ({ open, onClose, mutationFn, status }) => {
  const { control, handleSubmit, formState, reset, setValue } = useForm({
    mode: 'onChange',
  });

  const { data: products } = useGetProducts();

  const { selected } = useAppSelector(selectRows);
  const dispatch = useAppDispatch();

  // set values to input fields in case of editing
  useEffect(() => {
    if (selected.length === 1) {
      const product = products.find((item) => item.id === selected[0]);

      Object.keys(product).forEach((name) => {
        if (name === 'id') {
          return;
        }
        setValue(name, product[name], { shouldValidate: true, shouldTouch: true });
      });
    } else {
      reset();
    }
  }, [products, reset, selected, setValue]);

  const resetFormAndCloseDialog = () => {
    if (selected.length === 1) {
      dispatch(changeSelectedRows([]));
    }
    reset();
    onClose();
  };

  const onSubmit = (data) => {
    Object.keys(data).forEach((name) => {
      if (!data[name]) {
        data[name] = '';
      }
    });

    const quantityActual = data.quantityActual.replace(/\s+/g, '');
    const purchaseQuantity = data.purchaseQuantity ? data.purchaseQuantity.replace(/\s+/g, '') : 0;

    data.balance = quantityActual - purchaseQuantity;

    mutationFn(data, reset);
  };

  return (
    <DialogStyled open={open} onClose={onClose}>
      <DialogTitle>Сведения о товаре</DialogTitle>
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <DialogContentStyled>
          {inputsData.map((input) => (
            <Input
              key={input.name}
              name={input.name}
              label={input.label}
              control={control}
              rules={input.rules}
              disabled={status === 'loading'}
            />
          ))}
        </DialogContentStyled>
        <DialogActions sx={{ p: '0 24px 16px' }}>
          <Button onClick={resetFormAndCloseDialog}>Отменить</Button>
          <ConfirmButton
            disabled={!formState.isValid || status === 'loading'}
            type='submit'
            variant='outlined'
            loadingStatus={status}
            btnText={selected.length === 1 ? 'Обновить' : 'Добавить'}
          />
        </DialogActions>
      </Box>
    </DialogStyled>
  );
};

export default DialogForm;

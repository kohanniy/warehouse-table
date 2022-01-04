import React from 'react';
import { useForm } from 'react-hook-form';
import { DialogTitle, DialogActions, Button, Box } from '@mui/material';
import { DialogStyled, DialogContentStyled } from './styles';
import Input from '../Input';
import { inputsData } from '../../utils/constants';
import ConfirmButton from '../ConfirmButton';

function DialogForm({ open, onClose, mutationFn, status }) {
  const { control, handleSubmit, formState, reset } = useForm({
    mode: 'onChange',
  });

  const resetFormAndCloseDialog = () => {
    reset();
    onClose();
  };

  const onSubmit = (data) => {
    const quantityActual = data.quantityActual.replace(/\s+/g, '');
    const purchaseQuantity =
      data.purchaseQuantity !== '' ? data.purchaseQuantity.replace(/\s+/g, '') : 0;

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
              pattern={input.pattern}
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
            btnText='Добавить'
          />
        </DialogActions>
      </Box>
    </DialogStyled>
  );
}

export default DialogForm;

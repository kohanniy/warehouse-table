import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';

import Input from './Input';

import { inputsData } from '../utils/constants';

const DialogStyled = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: 'initial',
    width: '90%',

    [theme.breakpoints.down('md')]: {
      width: '95%',
      margin: 0,
    },
  },
}));

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  justifyContent: 'center',
}));

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

    const purchaseQuantity = data.purchaseQuantity.replace(/\s+/g, '');

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
          <Button
            disabled={!formState.isValid || status === 'loading'}
            type='submit'
            variant='outlined'
          >
            {status === 'loading' ? <CircularProgress color='inherit' size={20} /> : 'Добавить'}
          </Button>
        </DialogActions>
      </Box>
    </DialogStyled>
  );
}

export default DialogForm;

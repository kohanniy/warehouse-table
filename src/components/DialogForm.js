import React from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import Input from './Input';
import { addProduct } from '../firebase';

const inputsData = [
  {
    name: 'name',
    label: 'Наименование товара',
  },
  {
    name: 'package',
    label: 'Вид упаковки',
  },
  {
    name: 'quantityDoc',
    label: 'Количество товара по документам',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'quantityActual',
    label: 'Фактическое количество товара',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'arrivalDate',
    label: 'Дата прихода',
  },
  {
    name: 'orionBW',
    label: 'Таможенный склад Орион',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'logistics',
    label: 'Логистика',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'petrochemBW',
    label: 'Таможенный склад Petrochem',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'tashkent',
    label: 'Ташкент',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'bukhara',
    label: 'Бухара',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
  {
    name: 'recipient',
    label: 'Получатель',
  },
  {
    name: 'buyer',
    label: 'Покупатель',
  },
  {
    name: 'purchaseQuantity',
    label: 'Купил',
    pattern: {
      value: /[1-9]/,
      message: 'Поле принимает только числа',
    },
  },
];

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

function DialogForm({ open, onClose }) {
  const { control, handleSubmit, formState, reset } = useForm({
    mode: 'onChange',
  });
  const mutation = useMutation(addProduct);
  console.log('mutation', mutation);

  const onSubmit = (data) => {
    const colData = data;
    colData.balance =
      data.quantityActual.replace(/\s+/g, '') - data.purchaseQuantity.replace(/\s+/g, '');
    console.log(colData);
    mutation.mutate(colData)
  };


  const handleCancelClick = () => {
    reset();
    onClose();
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
            />
          ))}
        </DialogContentStyled>
        <DialogActions sx={{ p: '0 24px 16px' }}>
          <Button onClick={handleCancelClick}>Cancel</Button>
          <Button type='submit' variant='outlined' disabled={!formState.isValid}>
            Subscribe
          </Button>
        </DialogActions>
      </Box>
    </DialogStyled>
  );
}

export default DialogForm;

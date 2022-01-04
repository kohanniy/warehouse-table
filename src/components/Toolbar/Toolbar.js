import React from 'react';
import { Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ToolbarStyled } from './styles';

const Toolbar = ({ numSelected, addButtonClick, deleteButtonClick }) => {
  return (
    <ToolbarStyled>
      {numSelected > 0 ? (
        <Typography color='inherit' variant='subtitle1' component='p'>
          Выбрано товаров: {numSelected}
        </Typography>
      ) : (
        <Typography variant='h6' id='tableTitle' component='h2'>
          Товары
        </Typography>
      )}

      {numSelected > 0 ? (
        <Button 
          variant='outlined' 
          startIcon={<DeleteIcon />} 
          // onClick={deleteButtonClick}
        >
          Удалить
        </Button>
      ) : (
        <Button 
          variant='contained' 
          startIcon={<AddCircleIcon />} 
          // onClick={addButtonClick}
        >
          Добавить товар
        </Button>
      )}
    </ToolbarStyled>
  );
};

export default Toolbar;

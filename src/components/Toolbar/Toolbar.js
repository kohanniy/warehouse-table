import React from 'react';
import { Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ToolbarStyled } from './styles';
import { useAppSelector } from '../../app/hooks';
import { selectRows } from '../../app/slices/rowsSlice';

const Toolbar = ({ addButtonClick, deleteButtonClick }) => {
  const { selected } = useAppSelector(selectRows);

  return (
    <ToolbarStyled>
      {selected.length > 0 ? (
        <Typography color='inherit' variant='subtitle1' component='p'>
          Выбрано товаров: {selected.length}
        </Typography>
      ) : (
        <Typography variant='h6' id='tableTitle' component='h2'>
          Товары
        </Typography>
      )}

      {selected.length > 0 ? (
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
          onClick={addButtonClick}
        >
          Добавить товар
        </Button>
      )}
    </ToolbarStyled>
  );
};

export default Toolbar;

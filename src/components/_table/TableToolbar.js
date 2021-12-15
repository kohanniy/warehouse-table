import React from 'react';
import { Toolbar, Typography, Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ToolbarStyled = styled(Toolbar, { shouldForwardProp: (prop) => prop !== 'numSelected' })(
  ({ numSelected, theme }) => ({
    padding: 0,
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '10px',
    paddingBottom: '10px',

    [theme.breakpoints.up('sm')]: {
      padding: 0,
      flexDirection: 'row',
    },

    ...(numSelected > 0 && {
      backgroundColor: (theme) =>
        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
    }),
  })
);

function TableToolbar({ numSelected, addButtonClick, deleteButtonClick }) {
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
        <Button variant='outlined' startIcon={<DeleteIcon />} onClick={deleteButtonClick}>
          Удалить
        </Button>
      ) : (
        <Button variant='contained' startIcon={<AddCircleIcon />} onClick={addButtonClick}>
          Добавить товар
        </Button>
      )}
    </ToolbarStyled>
  );
}

export default TableToolbar;

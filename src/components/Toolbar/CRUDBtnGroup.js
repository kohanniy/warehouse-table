import { Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useAppSelector } from '../../app/hooks';
import useAppMediaQuery from '../../hooks/useAppMediaQuery';
import { selectRows } from '../../app/slices/rowsSlice';

const CRUDBtnGroup = ({ addBtnClick, editBtnClick, deleteBtnClick }) => {
  const { selected } = useAppSelector(selectRows);

  const { smUp } = useAppMediaQuery();

  return (
    <>
      {selected.length > 0 ? (
        <Stack direction={smUp ? 'row' : 'column'} spacing={2}>
          <Button variant='outlined' startIcon={<DeleteIcon />} onClick={deleteBtnClick}>
            Удалить
          </Button>
          {selected.length === 1 && (
            <Button
              variant='contained'
              color='info'
              startIcon={<ModeEditIcon />}
              onClick={editBtnClick}
            >
              Редактировать
            </Button>
          )}
        </Stack>
      ) : (
        <Button
          disableRipple
          variant='contained'
          startIcon={<AddCircleIcon />}
          onClick={addBtnClick}
        >
          Добавить товар
        </Button>
      )}
    </>
  );
};

export default CRUDBtnGroup;

import { Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectRows } from '../../app/slices/rowsSlice';

const Title = () => {
  const { selected } = useAppSelector(selectRows);

  return (
    <>
      {selected.length > 0 ? (
        <Typography color='inherit' variant='subtitle1' component='p'>
          Выбрано товаров: {selected.length}
        </Typography>
      ) : (
        <Typography variant='h6' id='tableTitle' component='h2'>
          Товары
        </Typography>
      )}
    </>
  );
};

export default Title;

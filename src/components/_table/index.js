import { CircularProgress, Table as MuiTable, TableHead, Typography } from '@mui/material';
import TopHeadRow from './TopHeadRow';
import BottomHeadRow from './BottomHeadRow';
import Container from './Container';
import Body from './Body';
import { useGetProducts } from '../../hooks/productsHooks';

const mAuto = { m: 'auto ' };

const Table = () => {
  const { data: products, status, error } = useGetProducts();

  return (
    <Container>
      <MuiTable stickyHeader>
        <TableHead>
          <TopHeadRow />
          <BottomHeadRow />
        </TableHead>
        {status === 'success' && products.length > 0 && <Body products={products} />}
      </MuiTable>
      {status === 'loading' && <CircularProgress sx={mAuto} />}
      {status === 'error' && (
        <Typography sx={{ ...mAuto, color: 'error.main' }}>{error.message}</Typography>
      )}
      {status === 'success' && products.length === 0 && (
        <Typography sx={mAuto}>В базе данных нет товаров</Typography>
      )}
    </Container>
  );
};

export default Table;

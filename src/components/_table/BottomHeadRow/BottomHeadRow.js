import { TableRow } from '@mui/material';
import { TableCellStyled } from './styles';
import Checkbox from '../Checkbox';
import { columns } from '../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeSelectedRows, selectRows } from '../../../app/slices/rowsSlice';
import { useGetProducts } from '../../../hooks/productsHooks';

const BottomHeadRow = () => {
  const { selected } = useAppSelector(selectRows);
  const dispatch = useAppDispatch();

  const { data: products } = useGetProducts();

  const handleChange = (event) => {
    if (event.target.checked) {
      const newSelected = products.map((product) => product.id);
      dispatch(changeSelectedRows(newSelected));
      return;
    }
    dispatch(changeSelectedRows([]));
  };

  return (
    <TableRow>
      <TableCellStyled padding='checkbox' align='center'>
        <Checkbox
          color='primary'
          indeterminate={selected.length > 0 && selected.length < products?.length}
          checked={products?.length > 0 && selected.length === products?.length}
          onChange={handleChange}
        />
      </TableCellStyled>
      {columns.map((column) => (
        <TableCellStyled align='center' key={column.id}>
          {column.label}
        </TableCellStyled>
      ))}
    </TableRow>
  );
};

export default BottomHeadRow;

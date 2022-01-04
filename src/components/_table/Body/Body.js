import { TableBody } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeSelectedRows, selectRows } from '../../../app/slices/rowsSlice';
import { TableRowStyled, TableCellStyled } from './styles';
import Checkbox from '../Checkbox';

const Body = ({ products }) => {
  const { selected } = useAppSelector(selectRows);
  const dispatch = useAppDispatch();

  const isRowSelected = (id) => selected.indexOf(id) !== -1;

  const handleRowClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    dispatch(changeSelectedRows(newSelected));
  };
  return (
    <TableBody>
      {products.map((product) => {
        const isItemSelected = isRowSelected(product.id);

        return (
          <TableRowStyled
            key={product.id}
            hover
            onClick={(event) => handleRowClick(event, product.id)}
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            selected={isItemSelected}
          >
            <TableCellStyled padding='checkbox' align='center'>
              <Checkbox color='primary' checked={isItemSelected} />
            </TableCellStyled>
            <TableCellStyled align='center'>{product.name}</TableCellStyled>
            <TableCellStyled align='center'>{product.package}</TableCellStyled>
            <TableCellStyled align='center'>{product.quantityDoc}</TableCellStyled>
            <TableCellStyled align='center'>{product.quantityActual}</TableCellStyled>
            <TableCellStyled align='center'>{product.arrivalDate}</TableCellStyled>
            <TableCellStyled align='center'>{product.orionBW}</TableCellStyled>
            <TableCellStyled align='center'>{product.logistics}</TableCellStyled>
            <TableCellStyled align='center'>{product.petrochemBW}</TableCellStyled>
            <TableCellStyled align='center'>{product.tashkent}</TableCellStyled>
            <TableCellStyled align='center'>{product.bukhara}</TableCellStyled>
            <TableCellStyled align='center'>{product.recipient}</TableCellStyled>
            <TableCellStyled align='center'>{product.buyer}</TableCellStyled>
            <TableCellStyled align='center'>{product.purchaseQuantity}</TableCellStyled>
            <TableCellStyled align='center'>{product.balance}</TableCellStyled>
          </TableRowStyled>
        );
      })}
    </TableBody>
  );
};

export default Body;

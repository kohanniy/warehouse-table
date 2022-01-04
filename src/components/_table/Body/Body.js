import { TableBody } from '@mui/material';
import { TableRowStyled, TableCellStyled } from './styles';
import Checkbox from '../Checkbox';

const Body = ({ products }) => {
  return (
    <TableBody>
      {products.map((product) => {
        // const isItemSelected = isSelected(product.id);

        return (
          <TableRowStyled
            key={product.id}
            hover
            // onClick={(event) => handleClick(event, product.id)}
            role='checkbox'
            // aria-checked={isItemSelected}
            tabIndex={-1}
            // selected={isItemSelected}
          >
            <TableCellStyled padding='checkbox' align='center'>
              <Checkbox
                color='primary'
                // checked={isItemSelected}
              />
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

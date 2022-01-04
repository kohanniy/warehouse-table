import PerfectScrollbar from 'react-perfect-scrollbar';
import { TableContainerStyled } from './styles';

const Container = ({ children }) => (
  <TableContainerStyled>
    <PerfectScrollbar>{children}</PerfectScrollbar>
  </TableContainerStyled>
);

export default Container;

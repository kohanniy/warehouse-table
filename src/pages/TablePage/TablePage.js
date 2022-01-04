import { useState } from 'react';
import { Main, Section, PaperStyled } from './styles';
import { useGetProducts } from '../../hooks/productsHooks';
import Table from '../../components/_table';
import Toolbar from '../../components/Toolbar';

const TablePage = () => {
  const { data: products, status, error } = useGetProducts();
  // const [selectedRow, setSelectedRow] = useState([]);

  // const isRowSelected = (id) => selectedRow.indexOf(id) !== -1;

  // const handleSelectAllRowClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = products.map((product) => product.id);
  //     setSelectedRow(newSelecteds);
  //     return;
  //   }
  //   setSelectedRow([]);
  // };

  // const handleRowClick = (event, id) => {
  //   const selectedIndex = selectedRow.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selectedRow, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selectedRow.slice(1));
  //   } else if (selectedIndex === selectedRow.length - 1) {
  //     newSelected = newSelected.concat(selectedRow.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selectedRow.slice(0, selectedIndex),
  //       selectedRow.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedRow(newSelected);
  // };

  return (
    <Main component='main'>
      <Section component='section' maxWidth='xl'>
        <PaperStyled elevation={0}>
          <Toolbar numSelected={0} />
          <Table numSelected={0} />
        </PaperStyled>
      </Section>
    </Main>
  );
};

export default TablePage;

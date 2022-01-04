import { Main, Section, PaperStyled } from './styles';
import { useGetProducts } from '../../hooks/productsHooks';
import Table from '../../components/_table';
import Toolbar from '../../components/Toolbar';

const TablePage = () => {
  const { data: products, status, error } = useGetProducts();

  return (
    <Main component='main'>
      <Section component='section' maxWidth='xl'>
        <PaperStyled elevation={0}>
          <Toolbar />
          <Table />
        </PaperStyled>
      </Section>
    </Main>
  );
};

export default TablePage;

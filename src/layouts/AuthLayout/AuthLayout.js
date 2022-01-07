import { Link as RouterLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { ToolbarStyled, LinkStyled, Main, Section } from './styles';
import NavTabs from '../../components/NavTabs';

const AuthLayout = ({ children }) => {
  return (
    <>
      <AppBar position='static' color='inherit'>
        <ToolbarStyled>
          <LinkStyled underline='none' component={RouterLink} to='/'>
            Складская таблица
          </LinkStyled>
          <NavTabs />
        </ToolbarStyled>
      </AppBar>
      <Main component='main'>
        <Section component='section'>{children}</Section>
      </Main>
    </>
  );
};

export default AuthLayout;

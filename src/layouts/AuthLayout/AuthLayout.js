import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ToolbarStyled, LinkStyled, Main, Section } from './styles';
import NavTabs from '../../components/NavTabs';
import useAppMediaQuery from '../../hooks/useAppMediaQuery';

const AuthLayout = ({ children }) => {
  const { smUp } = useAppMediaQuery();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position='static' color='inherit' sx={{ mb: 2 }}>
        <ToolbarStyled>
          <LinkStyled underline='none' component={RouterLink} to='/'>
            Складская таблица
          </LinkStyled>
          {smUp && <NavTabs />}
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </ToolbarStyled>
      </AppBar>
      {!smUp && (
        <Drawer
          anchor='top'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <NavTabs orientation='vertical' centered variant='fullWidth' />
        </Drawer>
      )}
      <Main component='main'>
        <Section component='section'>{children}</Section>
      </Main>
    </>
  );
};

export default AuthLayout;

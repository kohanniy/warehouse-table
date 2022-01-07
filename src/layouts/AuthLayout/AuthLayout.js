import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, IconButton, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ToolbarStyled, LinkStyled, Main, Section } from './styles';
import NavTabs from '../../components/NavTabs';

const AuthLayout = ({ children }) => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position='static' color='inherit'>
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

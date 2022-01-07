import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tabs } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LinkTab from './LinkTab';

const NavTabs = (props) => {
  const location = useLocation();

  const [value, setValue] = useState(location.pathname);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs component='nav' value={value} onChange={handleChange} {...props}>
      <LinkTab
        value='/login'
        label='Вход'
        to='/login'
        icon={<LoginIcon />}
        iconPosition='start'
      />
      <LinkTab
        value='/register'
        label='Регистрация'
        to='/register'
        icon={<AppRegistrationIcon />}
        iconPosition='start'
      />
    </Tabs>
  );
};

export default NavTabs;

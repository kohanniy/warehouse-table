import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import TablePage from './pages/TablePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<TablePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </ThemeConfig>
  );
};

export default App;

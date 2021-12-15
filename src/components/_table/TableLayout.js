import React from 'react';
import { Box, Container } from '@mui/material';

// styles
const boxStyles = {
  height: '100vh',
};

const containerStyles = {
  outline: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
};

function TableLayout({ children }) {
  return (
    <Box component='section' sx={boxStyles}>
      <Container maxWidth='xl' sx={containerStyles}>
        {children}
      </Container>
    </Box>
  );
}

export default TableLayout;

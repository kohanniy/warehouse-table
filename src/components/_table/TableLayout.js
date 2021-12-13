import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// styles
const boxStyles = {
  height: '100%',
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

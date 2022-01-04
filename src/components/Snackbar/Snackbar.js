import { forwardRef } from 'react';
import { Snackbar as MuiSnackbar, Alert as MuiAlert, Slide } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SlideTransition = (props) => <Slide {...props} direction='down' />;

const Snackbar = ({ open, onClose, error }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={onClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
        {error ? error.message : 'Все прошло успешно'}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;

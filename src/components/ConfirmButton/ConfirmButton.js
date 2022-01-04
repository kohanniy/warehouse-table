import { Button, CircularProgress } from '@mui/material';

const ConfirmButton = ({ loadingStatus, btnText, onConfirmBtnClick, ...props }) => {
  return (
    <Button variant='contained' onClick={onConfirmBtnClick} {...props}>
      {loadingStatus === 'loading' ? <CircularProgress color='inherit' size={20} /> : btnText}
    </Button>
  );
};

export default ConfirmButton;

import { useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

function ConfirmationDialog(props) {
  const { onClose, value: valueProp, open, onConfirmButtonClick, ...other } = props;
  const [value, setValue] = useState(valueProp);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      open={open}
      {...other}
    >
      <DialogTitle>Вы уверены, что хотите удалить эти товары</DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Отменить
        </Button>
        <Button variant='contained' onClick={onConfirmButtonClick}>Да</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;

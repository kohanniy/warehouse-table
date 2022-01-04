import { DialogTitle, DialogActions, Button } from '@mui/material';
import ConfirmButton from '../ConfirmButton';
import { DialogStyled } from './styles';

const ConfirmDialog = ({ open, onConfirmBtnClick, onCancelBtnClick, status }) => {
  return (
    <DialogStyled maxWidth='xs' open={open}>
      <DialogTitle>Вы уверены, что хотите удалить эти товары</DialogTitle>
      <DialogActions>
        <Button onClick={onCancelBtnClick}>Отменить</Button>
        <ConfirmButton
          disabled={status === 'loading'}
          loadingStatus={status}
          btnText='Да'
          onConfirmBtnClick={onConfirmBtnClick}
        />
      </DialogActions>
    </DialogStyled>
  );
};

export default ConfirmDialog;

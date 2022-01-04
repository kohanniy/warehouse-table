import { Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DialogStyled = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: 'initial',
    width: '90%',

    [theme.breakpoints.down('md')]: {
      width: '95%',
      margin: 0,
    },
  },
}));

export const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  justifyContent: 'center',
}));

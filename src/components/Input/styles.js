import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextFieldStyled = styled(TextField)({
  '& .MuiFormHelperText-root': {
    lineHeight: 1.1,
  },
});

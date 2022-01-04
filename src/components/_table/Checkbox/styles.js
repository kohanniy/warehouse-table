import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CheckboxStyled = styled(Checkbox)({
  padding: 0,
  
  '& .MuiSvgIcon-root': {
    width: '20px',
    height: '20px'
  }
});

import { CircularProgress as MuiCircularProgress } from '@mui/material';
import { BoxStyled } from './styles';

const CircularProgress = () => {
  return (
    <BoxStyled>
      <MuiCircularProgress size={60} />
    </BoxStyled>
  );
};

export default CircularProgress;

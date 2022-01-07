import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';

const useAppMediaQuery = () => {
  const theme = useTheme();

  const xsUp = useMediaQuery(theme.breakpoints.up('xs'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    xsUp,
    smUp,
    mdUp,
    lgUp
  }
};

export default useAppMediaQuery;

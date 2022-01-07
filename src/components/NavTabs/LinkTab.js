import { Tab } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LinkTab = ({ path, ...props }) => {
  return <Tab component={RouterLink} {...props} />;
};

export default LinkTab;

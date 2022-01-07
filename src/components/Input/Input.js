import { useState } from 'react';
import { useController } from 'react-hook-form';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextFieldStyled } from './styles';

const Input = ({ control, name, label, type = 'text', rules = null, ...props }) => {
  const {
    field: { onChange, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const inputEndAdornment = (
    <InputAdornment position='end'>
      <IconButton
        aria-label='toggle password visibility'
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge='end'
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  if (type === 'password') {
    return (
      <TextFieldStyled
        error={invalid}
        onChange={onChange}
        value={value || ''}
        name={name}
        inputRef={ref}
        label={label}
        helperText={error ? error.message : ' '}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: inputEndAdornment,
        }}
        {...props}
      />
    );
  }

  return (
    <TextFieldStyled
      error={invalid}
      onChange={onChange}
      value={value || ''}
      name={name}
      inputRef={ref}
      label={label}
      helperText={error ? error.message : ' '}
      {...props}
    />
  );
};

export default Input;

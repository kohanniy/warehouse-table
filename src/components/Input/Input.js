import React from 'react';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

function Input({ control, name, label, pattern = null, ...props }) {
  const {
    field: { onChange, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: 'Поле обязательно для заполнения', pattern },
  });

  return (
    <TextField
      error={invalid}
      onChange={onChange}
      value={value || ''} 
      name={name}
      inputRef={ref}
      label={label}
      helperText={error ? error.message : ''}
      {...props}
    />
  );
}

export default Input;

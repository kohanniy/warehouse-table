import React from 'react';
import { TextField } from '@mui/material';
import { useController, useForm } from 'react-hook-form';

function Input({ control, name, label, pattern = null }) {
  const {
    field: { onChange, value, ref },
    fieldState: { invalid, error },
    formState: { touchedFields, dirtyFields },
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
    />
  );
}

export default Input;

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ children, onSubmit, id }) {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                control: methods.control,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}

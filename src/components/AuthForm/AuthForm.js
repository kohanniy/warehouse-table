import { Children, createElement} from 'react';
import { useForm } from 'react-hook-form';
import { Form } from './styles';

const AuthForm = ({ children, onSubmit }) => {
  const methods = useForm({ mode: 'onChange' });
  const { handleSubmit, control } = methods;

  return (
    <Form component='form' noValidate onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                control,
                key: child.props.name,
              },
            })
          : child;
      })}
    </Form>
  );
};

export default AuthForm;

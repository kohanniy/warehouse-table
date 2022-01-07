import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, Link } from '@mui/material';
import { Children, createElement } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, PaperStyled, StackStyled } from './styles';
import { authFormSchema } from '../../utils/constants';

const AuthFormBlock = ({ isRegisterForm, children, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(authFormSchema) });

  return (
    <StackStyled spacing={2}>
      <PaperStyled elevation={0} variant='outlined'>
        <Typography component='h2' variant='h5'>
          {isRegisterForm ? 'Регистрация' : 'Вход'}
        </Typography>
        <Form component='form' noValidate onSubmit={handleSubmit(onSubmit)}>
          {Children.map(children, (child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    control: control,
                    key: child.props.name,
                  },
                })
              : child;
          })}
          <Button type='submit' variant='contained' disabled={!isValid || isSubmitting}>
            {isRegisterForm ? 'Зарегистрироваться' : 'Войти'}
          </Button>
        </Form>
      </PaperStyled>
      <Typography variant='body2'>
        {isRegisterForm ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы'}{' '}
        <Link underline='hover' component={RouterLink} to={isRegisterForm ? '/login' : 'register'}>
          {isRegisterForm ? 'Войти' : 'Зарегистрироваться'}
        </Link>
      </Typography>
    </StackStyled>
  );
};

export default AuthFormBlock;

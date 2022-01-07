import AuthFormBlock from '../../components/AuthFormBlock';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import { registerInputs } from '../../utils/constants';

const RegisterPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <AuthFormBlock isRegisterForm onSubmit={handleSubmit}>
        {registerInputs.map((input) => (
          <Input key={input.name} name={input.name} label={input.label} type={input.type} />
        ))}
      </AuthFormBlock>
    </AuthLayout>
  );
};

export default RegisterPage;

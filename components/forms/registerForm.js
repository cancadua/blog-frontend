import { Formik, Form, Field } from 'formik';
import InputField from '@/components/forms/inputField';
import { signUp } from '@/services/signUp';
import { useLogin } from '@/hooks/useLogin';

const initialRegistrationValues = {
  username: '',
  email: '',
  password: '',
  roles: [],
};

export const RegisterForm = ({ onClose }) => {
  const { login } = useLogin();

  const register = ({ username, email, password, roles }) => {
    signUp(username, email, password, [roles])
      .then((data) => {
        const user = JSON.parse(data.config.data);
        login({ username: user.username, password: user.password })
          .then(() => onClose());
      });
  };

  return (
    <Formik initialValues={initialRegistrationValues} onSubmit={register}>
      <Form className={'flex flex-col max-w-[600px] gap-10'}>
        <Field as={InputField} type={'text'} name={'username'} placeholder={'username'}/>
        <Field as={InputField} type={'email'} name={'email'} placeholder={'egzample@email.com'} autoComplete={'on'}/>
        <Field as={InputField} type={'role'} name={'roles'} autoComplete={'on'}/>
        <Field as={InputField} type={'password'} name={'password'} autoComplete={'on'}/>
        <button className={'button-cta'} type="submit">Register</button>
      </Form>
    </Formik>
  );
};

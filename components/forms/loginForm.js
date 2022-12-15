import { Formik, Form, Field } from 'formik';
import { useLogin } from '@/hooks/useLogin';
import InputField from '@/components/forms/inputField';

export const LoginForm = ({ onClose }) => {
  const { login, initialLoginValues } = useLogin();

  return (
    <Formik initialValues={initialLoginValues} onSubmit={({ username, password }) => {
      login({ username, password })
        .then(() => onClose());
    }}>
      <Form className={'flex flex-col max-w-[600px] gap-10'}>
        <Field as={InputField} type={'text'} name={'username'} placeholder={'username'}/>
        <Field as={InputField} type={'password'} name={'password'} autoComplete={'on'}/>
        <button className={'button-cta'} type="submit">Login</button>
      </Form>
    </Formik>
  );
};

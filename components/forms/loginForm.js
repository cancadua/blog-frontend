import { Formik, Form, Field } from 'formik';
import { useLogin } from '@/hooks/useLogin';
import InputField from '@/components/forms/inputField';
import Label from '@/components/forms/label';

export const LoginForm = ({ onClose }) => {
  const { login, initialLoginValues } = useLogin();

  return (
    <Formik initialValues={initialLoginValues} onSubmit={({ username, password }) => {
      login({ username, password })
        .then(() => onClose());
    }}>
      <Form className={'flex flex-col max-w-[600px] gap-6'}>
        <div>
          <Label>Username</Label>
          <Field as={InputField} type={'text'} name={'username'} placeholder={'username'}/>
        </div>
        <div>
          <Label>Password</Label>
          <Field as={InputField} type={'password'} name={'password'} placeholder={'password'} autoComplete={'on'}/>
        </div>
        <button className={'button-cta'} type="submit">Login</button>
      </Form>
    </Formik>
  );
};

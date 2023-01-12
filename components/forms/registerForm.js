import { Formik, Form, Field } from 'formik';
import InputField from '@/components/forms/inputField';
import { signUp } from '@/services/signUp';
import { useLogin } from '@/hooks/useLogin';
import Label from '@/components/forms/label';

const initialRegistrationValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = ({ onClose }) => {
  const { login } = useLogin();

  const register = ({ username, email, password }) => {
    signUp(username, email, password)
      .then((data) => {
        const user = JSON.parse(data.config.data);
        login({ username: user.username, password: user.password })
          .then(() => onClose());
      });
  };

  return (
    <Formik initialValues={initialRegistrationValues} onSubmit={register}>
      <Form className={'flex flex-col max-w-[600px] gap-6'}>
        <div>
          <Label>Username</Label>
          <Field as={InputField} type={'text'} name={'username'} placeholder={'username'}/>
        </div>
        <div>
          <Label>Email</Label>
          <Field as={InputField} type={'email'} name={'email'} placeholder={'example@email.com'} autoComplete={'on'}/>
        </div>
        <div>
          <Label>Password</Label>
          <Field as={InputField} type={'password'} name={'password'} placeholder={'password'} autoComplete={'on'}/>
        </div>
        <button className={'button-cta'} type="submit">Register</button>
      </Form>
    </Formik>
  );
};

import { Field, Form, Formik } from 'formik';
import { addComment } from '@/services/addComment';
import { useContext } from 'react';
import { UserContext } from '@/store/user/context';

const initialValues = {
  content: '',
};

const AddCommentForm = ({ articleId, onAction }) => {
  const { user } = useContext(UserContext);

  if (!user?.loggedIn) return;

  return (
    <Formik initialValues={initialValues} onSubmit={({ content }) => addComment(articleId, content).then(() => onAction())}>
      <Form className={'flex'}>
        <Field className={'input-field text-black flex-1'} as={'textarea'} name={'content'} autoComplete={'on'}/>
        <button className={'button-cta'} type="submit">Add comment</button>
      </Form>
    </Formik>
  );
};

export default AddCommentForm;

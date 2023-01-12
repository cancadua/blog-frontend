import { Field, Form, Formik } from 'formik';
import { editComment } from '@/services/editComment';
import { useRouter } from 'next/router';


const EditCommentForm = ({ commentId, onAction, initialValue }) => {
  const { query } = useRouter();

  const initialValues = {
    content: initialValue,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={({ content }) => editComment(query.index, commentId, content).then(() => onAction())}>
      <Form>
        <Field className={'input-field text-black'} type={'textarea'} name={'content'} autoComplete={'on'}/>
        <button className={'button-cta flex-1 ml-3'} type="submit">Add comment</button>
      </Form>
    </Formik>
  );
};

export default EditCommentForm;

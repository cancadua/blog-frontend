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
      <Form className={'flex flex-1'}>
        <Field className={'input-field flex-1 text-black'} as={'textarea'} name={'content'} autoComplete={'on'}/>
        <button className={'button-cta ml-3'} type="submit">Add comment</button>
      </Form>
    </Formik>
  );
};

export default EditCommentForm;

import { Field, Form, Formik } from 'formik';
import InputField from '@/components/forms/inputField';
import { addArticle } from '@/services/addArticle';

const initialValues = {
  title: '',
  content: '',
};

const AddArticleForm = ({ onClose, onAction }) => {

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ title, content }) => {
        addArticle(title, content).then(() => onAction());
      }
      }>
      <Form className={'flex flex-col max-w-[600px] mx-auto gap-10'}>
        <Field as={InputField} type={'text'} name={'title'} placeholder={'Title'}/>
        <Field className={'input-field text-sm min-h-[10rem]'} as={'textarea'} type={'text'} name={'content'} autoComplete={'on'}/>
        <div className={'flex gap-10'}>
          <button className={'button-cta flex-1'} type="submit">Add article</button>
          <button className={'button-cta flex-1'} type={'button'} onClick={() => onClose()}>Close</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddArticleForm;

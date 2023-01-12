import { Field, Form, Formik } from 'formik';
import InputField from '@/components/forms/inputField';
import { editArticle } from '@/services/editArticle';



const EditArticleForm = ({ initialValues, articleId, onAction, onClose }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ title, content }) => {
        editArticle(articleId, title, content).then(() => onAction());
      }
      }>
      <Form className={'flex flex-col flex-1'}>
        <div className={'flex text-black flex-col flex-1'}>
          <Field as={InputField} type={'text'} name={'title'} placeholder={'Title'}/>
          <Field className={'input-field text-sm min-h-[10rem]'} as={'textarea'} type={'text'} name={'content'} autoComplete={'on'}/>
        </div>

        <div className={'flex justify-end mt-4'}>
          <button className={'button-cta min-w-[10rem]'} onClick={onClose}>
            Cancel
          </button>
          <button className={'button-cta min-w-[10rem]'} type="submit">
            Edit
          </button>
        </div>

      </Form>
    </Formik>
  );
};

export default EditArticleForm;

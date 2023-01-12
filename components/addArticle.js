import { useState } from 'react';
import AddArticleForm from '@/components/forms/addArticleForm';

const AddArticle = ({ onAction }) => {
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  return (
    <div className={'mb-4'}>
      {isAddingArticle ? (
        <AddArticleForm
          onAction={() => {
            setIsAddingArticle(false);
            onAction();
          }}
          onClose={() => setIsAddingArticle(false)}
        />
      ) : (
        <button className={'button-cta'} onClick={() => setIsAddingArticle(true)}>
          Add new article
        </button>
      )}
    </div>
  );
};

export default AddArticle;

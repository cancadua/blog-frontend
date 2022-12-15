import { useState } from 'react';
import AddArticleForm from '@/components/forms/addArticleForm';

const AddArticle = () => {
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  return (
    <div className={'mb-4'}>
      {isAddingArticle ? (
        <AddArticleForm onClose={() => setIsAddingArticle(false)}/>
      ) : (
        <button className={'button-cta'} onClick={() => setIsAddingArticle(true)}>
          Add new article
        </button>
      )}
    </div>
  )
}

export default AddArticle;

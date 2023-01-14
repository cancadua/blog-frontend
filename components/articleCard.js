import Link from 'next/link';
import CommentsList from '@/components/commentsList';
import AddCommentForm from '@/components/forms/addCommentForm';
import clsx from 'clsx';
import Image from 'next/image';
import { deleteArticle } from '@/services/deleteArticle';
import { UserContext } from '@/store/user/context';
import { useContext, useState } from 'react';
import EditArticleForm from '@/components/forms/editArticleForm';

const ArticleCard = ({ article, details = false, onAction = () => null }) => {
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={'wrapper'}>

      <div className={'flex justify-between items-end'}>
        <span className={'text-green text-xl'}>
          {article.user.username}
        </span>

        <div className={'flex'}>
          <span className={'text-green'}>{new Date(article.createdAt).toLocaleDateString()}</span>
          {((!details && article.user.userId === user?.userId) || user?.roles.includes('ROLE_ADMIN')) && (
            <div
              className={'relative w-4 h-5 ml-4 cursor-pointer'}
              onClick={() => {
                deleteArticle(article.postId)
                  .then(() => onAction());
              }}>
              <Image src={'/trash.svg'} alt={''} layout={'fill'}/>
            </div>
          )}

          {details && ((article.user.userId === user?.userId) || user?.roles.includes('ROLE_ADMIN')) && (
            <p className={'hover:text-green transition cursor-pointer ml-6'} onClick={() => setIsEditing(true)}>
              Edit
            </p>
          )}
        </div>

      </div>

      {isEditing ? (
        <div className={'md:flex'}>
          <EditArticleForm
            initialValues={{
              title: article.title,
              content: article.content,
            }}
            articleId={article.postId}
            onClose={() => setIsEditing(false)}
            onAction={() => {
              onAction();
              setIsEditing(false);
            }}
          />
        </div>
      ) : (
        <>
          <h2 className={'text-3xl'}>{article.title}</h2>
          <div className={'p-2 md:p-4 bg-grey/50'}>
            <p className={clsx('text-xl text-grey-lighter', !details && 'line-clamp-3')}>
              {article.content}
            </p>
          </div>
        </>
      )}

      {details ? (
        <div>
          <p className={'text-2xl my-12'}>
            Comments
          </p>
          <CommentsList article={article} onAction={onAction}/>
          <div className={'mt-8'}>
            <AddCommentForm articleId={article.postId} onAction={onAction}/>
          </div>
        </div>
      ) : (
        <Link href={`/article/${article.postId}`} className={'button-cta block w-fit ml-auto '}>
          Read more
        </Link>
      )}

    </div>
  );
};

export default ArticleCard;

import { deleteComment } from '@/services/deleteComment';
import Image from 'next/image';
import { useContext, useState } from 'react';
import EditCommentForm from '@/components/forms/editCommentForm';
import { UserContext } from '@/store/user/context';

const Comment = ({ comment, article, onAction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <li key={comment.commentId} className={'px-3 py-4 bg-grey-light'}>
      <div className={'flex justify-between mb-4'}>
            <span className={'text-green text-lg'}>
              {comment.user.username}
            </span>
        <div className={'flex gap-3 items-center'}>
          {comment.createdAt !== comment.updatedAt ? (
            <>Edytowano {new Date(comment.updatedAt).toLocaleDateString()}</>
          ) : (
            <>Utworzono {new Date(comment.createdAt).toLocaleDateString()}</>
          )}

          {user?.userId === article.user.userId && (
            <>
              <p className={'hover:text-green transition cursor-pointer ml-6'} onClick={() => setIsEditing(true)}>
                Edit
              </p>

              <div
                className={'relative w-4 h-5 cursor-pointer'}
                onClick={() => {
                  deleteComment(article.articleId, comment.commentId)
                    .then(() => onAction());
                }}>
                <Image src={'/trash.svg'} alt={''} layout={'fill'}/>
              </div>
            </>
          )}
        </div>
      </div>
      {isEditing ? (
        <div className={'flex'}>
          <EditCommentForm commentId={comment.commentId} onAction={() => {
            onAction();
            setIsEditing(false);
          }} initialValue={comment.content}/>
          <button className={'button-cta ml-3'} onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <p className={'text-xl px-3'}>
          {comment.content}
        </p>
      )}

    </li>
  );

};

export default Comment;

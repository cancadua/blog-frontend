import Comment from '@/components/comment';

const CommentsList = ({ article, onAction }) => {
  return (
    <ul className={'flex flex-col gap-8'}>
      {article.comments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map(comment => (
        <Comment
          key={comment.commentId}
          comment={comment}
          article={article}
          onAction={onAction}
        />
      ))}
    </ul>
  );
};

export default CommentsList;

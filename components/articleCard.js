import Link from 'next/link';

const ArticleCard = ({ post }) => {
  return (
    <Link href={`/article/${post.id}`}>
      <div className={'bg-grey-dark text-white'}>
        <h2>{post.title}</h2>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <p>
          {post.content}
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;

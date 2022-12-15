import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/article/${post.id}`}>
      <div>
        <h2>{post.title}</h2>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <p>
          {post.content}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;

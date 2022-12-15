import Link from 'next/link';

const ArticleCard = ({ article }) => {
  return (
    <div className={'wrapper'}>
      <div className={'flex justify-between items-end'}>
        <Link href={`/user/${article.user.id}`} className={'text-green text-xl'}>
          {article.user.username}
        </Link>

        <span className={'text-green'}>{new Date(article.createdAt).toLocaleDateString()}</span>
      </div>
      <h2 className={'text-3xl'}>{article.title}</h2>

      <p className={'text-xl text-grey-lighter bg-grey/50 p-4'}>
        {article.content}
      </p>

      <Link href={`/article/${article.id}`} className={'button-cta block w-fit ml-auto'}>
        Read more
      </Link>
    </div>
  );
};

export default ArticleCard;

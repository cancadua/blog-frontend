import ArticleCard from '@/components/articleCard';

const ArticlesList = ({ articles = [], onAction }) => {
  return (
    <div className={'flex flex-col gap-16'}>
      {articles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(article => (
        <ArticleCard article={article} onAction={onAction} key={article.postId}/>
      ))}
    </div>
  );
};

export default ArticlesList;

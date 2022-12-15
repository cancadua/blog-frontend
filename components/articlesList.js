import ArticleCard from '@/components/articleCard';

const ArticlesList = ({articles = []}) => {
  return (
    <div className={'flex flex-col gap-16'}>
      {articles.map(article => (
        <ArticleCard post={article} key={article.id}/>
      ))}
    </div>
  )
}

export default ArticlesList;

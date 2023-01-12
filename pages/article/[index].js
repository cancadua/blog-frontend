import PageLayout from '@/components/layouts/pageLayout';
import ArticleCard from '@/components/articleCard';
import { useArticle } from '@/hooks/useArticle';

const ArticlePage = () => {
  const { article, fetchArticleData } = useArticle()

  return (
    <PageLayout>
      <div className={'container'}>
        {article && (
          <ArticleCard article={article} onAction={() => fetchArticleData()} details/>
        )}
      </div>
    </PageLayout>
  );
};

export default ArticlePage;

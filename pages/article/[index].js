import PageLayout from '@/components/layouts/pageLayout';
import axios from 'axios';

const ArticlePage = ({ post }) => {


  return (
    <PageLayout>
      {console.log(post)}
    </PageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { index } = context.query;

  const post = await axios.get(`/public/posts/${index}`).then(({ data }) => data);

  return { props: { post: post } };
};

export default ArticlePage;

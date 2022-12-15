import PageLayout from '@/components/layouts/pageLayout';
import axios from 'axios';

const User = ({ posts }) => {
  return (
    <PageLayout>
      {console.log(posts)}
    </PageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { index } = context.query;

  const posts = await axios.get(`/public/users/${index}/posts`).then(({ data }) => data);

  return { props: { posts: posts } };
};

export default User;

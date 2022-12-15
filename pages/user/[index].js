import PageLayout from '@/components/layouts/pageLayout';
import axios from 'axios';
import ArticlesList from '@/components/articlesList';
import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import AddArticle from '@/components/addArticle';

const User = ({ posts }) => {
  const { user } = useContext(UserContext);

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center grid grid-cols-12 gap-10'}>
        <div className={'col-span-9'}>
          {user?.loggedIn && <AddArticle/>}
          <ArticlesList articles={posts}/>
        </div>

        <div className={'col-span-3'}>
          <div className={'wrapper'}>
            <div className={'text-xl'}>Hello {user?.username}</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { index } = context.query;

  const posts = await axios.get(`/public/users/${index}/posts`).then(({ data }) => data);

  return { props: { posts: posts } };
};

export default User;

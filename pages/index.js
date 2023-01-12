import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import axios from 'axios';
import PageLayout from '@/components/layouts/pageLayout';
import Link from 'next/link';
import ArticlesList from '@/components/articlesList';

const Home = ({ posts = [] }) => {
  const { user } = useContext(UserContext);

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center grid grid-cols-12 gap-10'}>
        <div className={'col-span-9'}>
          <ArticlesList articles={posts}/>
        </div>
        <div className={'col-span-3'}>
          <div className={'wrapper'}>
            {user?.loggedIn ? (
              <>
                <div className={'text-xl'}>Hello {user.username}</div>
                <div>
                  Check out your content <Link href={`/user`} className={'text-green underline'}>here</Link>
                </div>
              </>
            ) : (
              <div className={'text-xl'}>Hello anonymous user</div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps = async () => {
  const posts = await axios.get('/public/posts/page=0').then(({ data }) => data);
  return { props: { posts: posts } };
};

export default Home;

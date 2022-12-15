import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import axios from 'axios';
import PageLayout from '@/components/layouts/pageLayout';
import Link from 'next/link';
import ArticlesList from '@/components/articlesList';

const Home = ({ posts }) => {
  const { user } = useContext(UserContext);

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center grid grid-cols-12 gap-10'}>

        <div className={'bg-black/30 col-span-9'}>
          <ArticlesList articles={posts}/>
        </div>

        <div className={'bg-black/30 col-span-3'}>
          {user?.loggedIn ? (
            <>
              <div className={'text-4xl my-16'}>Hello {user.username}</div>
              <div>
                Check out your content <Link href={`/user/${user.id}`} className={'text-green underline'}>here</Link>
              </div>
            </>
          ) : (
            <div className={'text-4xl my-16'}>Hello anonymous user</div>
          )}

        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps = async () => {
  const posts = await axios.get('/public/posts').then(({ data }) => data);

  return { props: { posts: posts } };
};

export default Home;

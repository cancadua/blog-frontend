import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/store/user/context';
import axios from 'axios';
import PageLayout from '@/components/layouts/pageLayout';
import Link from 'next/link';
import ArticlesList from '@/components/articlesList';

const Home = () => {
  const { user } = useContext(UserContext);
  const [articles, setArticles] = useState([])

  const fetchArticles = () => {
    axios.get('/public/posts/page=0')
      .then(({ data }) => setArticles(data))
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center flex flex-col-reverse md:grid md:grid-cols-12 gap-10'}>
        <div className={'md:col-span-9'}>
          <ArticlesList articles={articles} onAction={fetchArticles}/>
        </div>
        <div className={'md:col-span-3'}>
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

export default Home;

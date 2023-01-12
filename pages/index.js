import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/store/user/context';
import axios from 'axios';
import PageLayout from '@/components/layouts/pageLayout';
import Link from 'next/link';
import ArticlesList from '@/components/articlesList';
import Pagination from '@/components/pagination';

const Home = () => {
  const { user } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const fetchArticles = (page) => {
    axios.get(`/public/posts/page=${page}`)
      .then(({ data, headers }) => {
        setNumberOfPages(headers['number-of-pages']);
        setArticles(data);
      });
  };

  useEffect(() => {
    fetchArticles(activePage);
  }, [activePage]);

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center flex flex-col-reverse md:grid md:grid-cols-12 gap-10'}>
        <div className={'md:col-span-9'}>
          <ArticlesList articles={articles} onAction={() => fetchArticles(activePage)}/>
          <Pagination numberOfPages={numberOfPages} onPageChange={setActivePage}/>
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

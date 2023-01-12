import PageLayout from '@/components/layouts/pageLayout';
import ArticlesList from '@/components/articlesList';
import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import AddArticle from '@/components/addArticle';
import { useLogin } from '@/hooks/useLogin';

const User = () => {
  const { user } = useContext(UserContext);
  const { userArticles, fetchUserArticles } = useLogin();

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center grid grid-cols-12 gap-10'}>
        <div className={'col-span-9'}>
          {user?.loggedIn && <AddArticle onAction={fetchUserArticles}/>}
          <div className={'mt-12'}>
            <ArticlesList onAction={fetchUserArticles} articles={userArticles}/>
          </div>

        </div>
        <div className={'col-span-3'}>
          <div className={'wrapper'}>
            <div className={'text-xl'}>Username: {user?.username}</div>
            <div className={'text-xl'}>Email: {user?.email}</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default User;

import { LoginForm } from '@/components/forms/loginForm';
import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import { RegisterForm } from '@/components/forms/registerForm';
import axios from 'axios';
import PostCard from '@/components/post-card';
import PageLayout from '@/components/layouts/pageLayout';

const Home = ({ posts }) => {
  const { user } = useContext(UserContext);

  return (
    <PageLayout>
      <div className={'container flex flex-col justify-center'}>
        {user?.loggedIn && <h1 className={'text-center text-4xl my-16'}>Hello {user.username}</h1>}

        {!user?.loggedIn && <LoginForm/>}

        {!user?.loggedIn && <RegisterForm/>}

        <div className={'bg-black/30'}>
          {posts.map(post => (
            <PostCard post={post} key={post.id}/>
          ))}
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

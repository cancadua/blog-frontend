import Navbar from '../components/navbar';
import { LoginForm } from '@/components/forms/loginForm';
import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import { RegisterForm } from '@/components/forms/registerForm';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={'bg-grey min-h-screen'}>
      <Navbar/>

      <div className={'container flex justify-center'}>
        {user?.loggedIn && <h1 className={'text-center text-4xl my-16'}>Hello {user.username}</h1>}

        {!user?.loggedIn && <LoginForm/>}

        {!user?.loggedIn && <RegisterForm/>}
      </div>

    </div>

  )
}

export default Home;

import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '@/store/user/context';
import { useLogin } from '@/hooks/useLogin';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { logOut } = useLogin();

  return (
    <nav className={'flex justify-between items-center container py-3'}>
      <Link href={'/'} legacyBehavior>
        <a className="text-3xl py-3 text-green font-bold underline">
          Blog
        </a>
      </Link>

      {user?.loggedIn && <button className={'button-cta'} onClick={() => logOut()}>Log out</button>}
    </nav>
  );
};

export default Navbar;

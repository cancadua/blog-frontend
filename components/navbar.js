import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { UserContext } from '@/store/user/context';
import { useLogin } from '@/hooks/useLogin';
import Modal from '@/components/modal';
import { LoginForm } from '@/components/forms/loginForm';
import { RegisterForm } from '@/components/forms/registerForm';

const Navbar = () => {
  const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const { user } = useContext(UserContext);
  const { logOut } = useLogin();

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {modalData}
      </Modal>
      <nav className={'flex justify-between items-center container py-3'}>
        <Link href={'/'} legacyBehavior>
          <a className="text-3xl py-3 text-green font-bold underline">
            Blog
          </a>
        </Link>
        {user?.loggedIn ? (
          <button className={'button-cta'} onClick={() => logOut()}>Log out</button>
        ) : (
          <div>
            <button
              className={'button-cta'}
              onClick={() => {
                setModalData(<LoginForm onClose={() => setModalIsOpen(false)}/>);
                setModalIsOpen(true);
              }}
            >
              Log in
            </button>
            <button
              className={'button-cta'}
              onClick={() => {
                setModalData(<RegisterForm onClose={() => setModalIsOpen(false)}/>);
                setModalIsOpen(true);
              }}
            >
              Register
            </button>
          </div>
        )}
      </nav>
    </>

  );
};

export default Navbar;

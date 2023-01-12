import { useContext, useEffect, useState } from 'react';
import { deleteAuthToken } from '@/utils/deleteAuthToken';
import { singIn } from '@/services/signIn';
import { UserContext } from '@/store/user/context';
import axios from 'axios';

const initialLoginValues = {
  username: '',
  password: '',
};

export const useLogin = () => {
  const { setUser, user } = useContext(UserContext);
  const [userArticles, setUserArticles] = useState([]);

  const fetchUserArticles = () => {
    if (user?.loggedIn) {
      axios.get(`/users/me`)
        .then(({ data }) => {
          setUserArticles(data.posts);
        });
    }
  };

  const login = ({ username, password }) => {
    return singIn(username, password).then(user => {
      setUser(user);
    });
  };

  const logOut = () => {
    deleteAuthToken();
    setUser(null);
  };

  useEffect(() => {
    login({ username: 'testuser', password: 'password' }).then(() => {
    });
  }, []);

  useEffect(() => {
    fetchUserArticles();
  }, [user?.userId]);


  return { login, initialLoginValues, logOut, userArticles, fetchUserArticles };
};

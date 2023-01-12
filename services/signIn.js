import axios from 'axios';

import { deleteAuthToken } from '@/utils/deleteAuthToken';
import { setAuthToken } from '@/utils/setAuthToken';

export const singIn = async (username, password) => {

  return axios.post('/auth/signin', {
    username,
    password
  }).then(({ data }) => {
    setAuthToken(data.token, data.type);
    return {
      userId: data.userId,
      username: data.username,
      articles: data.posts,
      email: data.email,
      roles: data.roles,
      loggedIn: true,
    };
  }).catch(() => {
    deleteAuthToken();
    return null;
  });
};

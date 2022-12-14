import axios from "axios";

import { deleteAuthToken } from "@/utils/deleteAuthToken";
import { setAuthToken } from "@/utils/setAuthToken";

export const singInViaToken = async (token) => {
  setAuthToken(token);

  console.log(token)

  return axios.post('/auth/signin', {
  }).then(({ data }) => ({
    id: data.id,
    username: data.username,
    email: data.email,
    roles: data.roles,
    loggedIn: true,
  })).catch(() => {
    deleteAuthToken();
    return null;
  })
};

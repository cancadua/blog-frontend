import axios from 'axios';

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
}
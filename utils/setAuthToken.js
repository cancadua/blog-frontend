import axios from 'axios';
import { setDataInLocalStorage } from './localStorageOperations';

export const setAuthToken = (token, type) => {
  const value = type ? `${type} ${token}` : token
  setDataInLocalStorage('token', value);
  axios.defaults.headers.common["Authorization"] = value;
}

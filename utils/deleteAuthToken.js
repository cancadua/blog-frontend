import axios from 'axios';
import { deleteDataFromLocalStorage } from './localStorageOperations';

export const deleteAuthToken = () => {
  deleteDataFromLocalStorage('token');
  delete axios.defaults.headers.common['Authorization'];
};

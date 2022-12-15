import axios from "axios";
import { deleteAuthToken } from "@/utils/deleteAuthToken";

export const signUp = async (username, email, password, role) => {
  deleteAuthToken()
  return axios.post('/auth/signup', {
    username,
    email,
    password,
    role
  });
};

import { useContext } from "react";
import { deleteAuthToken } from "@/utils/deleteAuthToken";
import { singIn } from '@/services/signIn';
import { UserContext } from '@/store/user/context';

const initialLoginValues = {
  username: '',
  password: '',
}

export const useLogin = () => {
  const { setUser } = useContext(UserContext);

  const onSubmit = ({ username, password }) => {
    singIn(username, password).then(user => {
      setUser(user)
    });
  };

  const logOut = () => {
    deleteAuthToken();
    setUser(null);
  }

  return { onSubmit, initialLoginValues, logOut };
};

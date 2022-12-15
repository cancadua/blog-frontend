import React, { useEffect, useState } from "react";

import { singInViaToken } from '@/services/signInViaToken';
import { getDataFromLocalStorage } from "@/utils/localStorageOperations";

import { UserContext } from "./context";

export const UserProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  useEffect(() => {
    const token = getDataFromLocalStorage('token');

    if (token) {
      singInViaToken(token).then((user) => setUser(user));
    }
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

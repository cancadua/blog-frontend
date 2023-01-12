import React, { useState } from "react";

import { UserContext } from "./context";

export const UserProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  // useEffect(() => {
  //   const token = getDataFromLocalStorage('token');
  //
  //   if (token) {
  //     singInViaToken(token).then((user) => setUser(user));
  //   }
  // }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

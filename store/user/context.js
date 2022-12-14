import React from 'react';

export const UserContext = React.createContext({
  user: {
    id: '',
    username: '',
    email: '',
    banned: false,
    roles: [],
    loggedIn: false,
  },
  setUser: () => {}
});

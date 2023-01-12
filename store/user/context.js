import React from 'react';

export const UserContext = React.createContext({
  user: {
    userId: null,
    username: '',
    email: '',
    banned: false,
    articles: [],
    roles: [],
    loggedIn: false,
  },
  setUser: () => {}
});

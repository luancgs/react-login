import React, { useContext, useState } from 'react';
import { auth } from '../modules/AuthModule';

const AuthContext = React.createContext<{
  currentUser: object;
  signUp: (email: string, password: string) => any;
  logIn: (email: string, password: string) => any;
  logOut: () => any;
}>({
  currentUser: {},
  signUp: () => {},
  logIn: () => {},
  logOut: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

interface ContextProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FunctionComponent<ContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  function signUp(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email: string, password: string) {
    return auth.loginWithEmailAndPassword(email, password);
  }

  function logOut() {}

  function logInWithLinkedin(email: string, password: string) {}

  return <AuthContext.Provider value={{ currentUser, signUp, logIn, logOut }}>{children}</AuthContext.Provider>;
};

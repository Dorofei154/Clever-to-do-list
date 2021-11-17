import { onAuthStateChanged, User } from 'firebase/auth';
import React, { memo, useEffect, useState } from 'react';

import { auth, login, logout, signup } from '../firebase';
import { LoginContext } from './context';
import { IProviderProps } from './types';

function LoginProviderComponent({ children }: IProviderProps) {
  const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(
      null
    );
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user: User | null) => {
        setCurrentUser(user);
      });
      return unsub;
    }, []);
    return currentUser;
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log(email, password);
      await login(email, password);
    } catch (e) {
      alert('Invalid data');
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      alert('Logout is not available');
    }
  };
  const handleRegistration = async (email: string, password: string) => {
    await signup(email, password);
  };

  return (
    <LoginContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        handleLogout,
        useAuth
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const LoginProvider = memo(LoginProviderComponent);

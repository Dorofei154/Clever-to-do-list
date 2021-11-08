import React from 'react';
import { LoginContextValue } from './types';

export const LoginContextValues: LoginContextValue = {
  handleRegistration: (email: string, password: string) => {},
  handleLogin: (email: string, password: string) => {},
  handleLogout: () => {},
  useAuth: () => null
};

export const LoginContext = React.createContext(LoginContextValues);

import { User } from 'firebase/auth';
import React from 'react';

export interface LoginContextValue {
  handleRegistration: (email: string, password: string) => void;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  useAuth: () => User | null | undefined;
}

export interface IProviderProps {
  children: React.ReactNode;
}

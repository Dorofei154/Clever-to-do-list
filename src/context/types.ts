import { User } from 'firebase/auth';
import React from 'react';

export type TFuncsToCloseDropDowns = () => void;

export interface DropDownContextValue { 
  handleRegistration: (email:string, password: string) => void;
   handleLogin: (email:string, password: string) => void;
   handleLogout: () => void;
   useAuth: () => User | null | undefined
  }

export interface IProviderProps {
  children: React.ReactNode;
}

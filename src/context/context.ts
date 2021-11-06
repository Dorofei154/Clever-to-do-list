import React from 'react';
import {DropDownContextValue} from './types';

export const dropDownContextValue: DropDownContextValue = {
  handleRegistration: (email:string, password: string) => {},
  handleLogin: (email:string, password: string) => {},
  handleLogout: () => {},
  useAuth: () => null
};

export const DropDownContext = React.createContext(dropDownContextValue);

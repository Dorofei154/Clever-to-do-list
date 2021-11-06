import { onAuthStateChanged, User } from "firebase/auth";
import React, { memo, useEffect, useState  } from "react";

import { auth, login, logout, signup } from "../firebase";
import { DropDownContext } from "./context";
import { IProviderProps } from "./types";

function DropDownProviderComponent({ children }: IProviderProps) {


  const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user: User | null) => {
        setCurrentUser(user);
      });
      return unsub;
    }, []);
    return currentUser;
  };

  const handleLogin = async (email:string, password: string) => {
    try {
      await login(email, password);
    } catch (e) {
      alert("Invalid data");
    }
  };
  const handleLogout = async () => {
    try {
      await logout()
    } catch {
      alert("Logout is not available");
    }
  };
  const handleRegistration = async (email:string, password: string, ) => {
      await signup(email, password);
     
    
  };

  return (
    <DropDownContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        handleLogout,
        useAuth
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
}

export const DropDownProvider = memo(DropDownProviderComponent);




// how to use in components
// const {setFuncToCloseDropDown, closeAllDropDowns} = useContext(
//   DropDownContext,
// );

// Так же нужно обернуть компоненты которые будут использовать этот контекс в провайдер

// было так         <RootNavigation />

// стало так
//  <DropDownProvider>
// <RootNavigation />
// </DropDownProvider>

// теперь во всех компонентах ниже ты можешь использовать useContext и брать нужные тебе функции

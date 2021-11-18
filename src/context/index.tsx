import { onAuthStateChanged, User } from 'firebase/auth';
import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { сurrentUserCreator } from '../store/actionCreators/сurrentUserCreator';
import { auth, login, logout, signup } from '../firebase';
import { LoginContext } from './context';
import { IProviderProps } from './types';

function LoginProviderComponent({ children }: IProviderProps) {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const setCurrentUser = useCallback(
    (e: any) => {
      dispatch(сurrentUserCreator(e));
    },
    [dispatch]
  );

  const useAuth = () => {
    return state.currentUser;
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
    return unsub;
  }, [setCurrentUser]);

  const handleLogin = async (email: string, password: string) => {
    try {
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

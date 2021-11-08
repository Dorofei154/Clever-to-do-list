import { useCallback, useContext, useState } from 'react';

import { LoginView } from '../views/Login/Login';
import { useHistory } from 'react-router';
import { LoginContext } from '../../context/context';

const LoginContainerComponent = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const { handleLogin } = useContext(LoginContext);
  const handleChangePassowrd = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  return (
    <LoginView
      password={password}
      email={email}
      text="Sign in"
      history={history}
      handleLogin={handleLogin}
      handleChangePassowrd={handleChangePassowrd}
      handleChangeEmail={handleChangeEmail}
    />
  );
};
export const LoginContainer = LoginContainerComponent;

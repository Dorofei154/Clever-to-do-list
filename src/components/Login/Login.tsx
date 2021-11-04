import React, { useCallback, useState } from "react";
import "./Login.styles.ts";

import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

import { login } from "../../firebase";

import { LoginView } from "../views/Login/Login";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleChangePassowrd = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handleLogin = async () => {
    try {
      await login(email, password);
      history.push(ROUTES.TODO_ROUTE);
    } catch (e) {
      alert("Invalid data");
    }
  };
  return (
    <LoginView
      password={password}
      email={email}
      handleChangePassowrd={handleChangePassowrd}
      handleChangeEmail={handleChangeEmail}
      handleLogin={handleLogin}
    />
  );
};
export { Login };

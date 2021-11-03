import React, { useState } from "react";
import "./Login.styles.ts";

import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

import { login } from "../../firebase";

import { LoginView } from "../views/Login/Login";

const Login = () => {
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const history = useHistory();

  const changeInput = (e: { target: HTMLInputElement }) => {
    e.target.type === "email"
      ? SetEmail(e.target.value)
      : SetPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
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
      changeInput={changeInput}
      handleLogin={handleLogin}
    />
  );
};
export { Login };

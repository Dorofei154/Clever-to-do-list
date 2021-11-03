import React, { useState } from "react";
import { signup } from "../../firebase";

import { useHistory } from "react-router";
import { ROUTES } from "../../constants/constants";
import { RegisterView } from "../views/Register/Register";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const changeInput = (e: { target: HTMLInputElement }) => {
    e.target.type === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleRegistration = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      await signup(email, password);
      history.push(ROUTES.LOGIN_ROUTE);
    } catch (e) {
      alert("Invalid data");
    }
  };
  return (
    <RegisterView
      password={password}
      changeInput={changeInput}
      email={email}
      handleRegistration={handleRegistration}
    />
  );
};
export { Register };

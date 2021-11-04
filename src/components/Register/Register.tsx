import React, { useCallback, useState } from "react";
import { signup } from "../../firebase";

import { useHistory } from "react-router";
import { ROUTES } from "../../constants/constants";
import { RegisterView } from "../views/Register/Register";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChangePassowrd = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handleRegistration = async () => {
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
      email={email}
      handleRegistration={handleRegistration}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassowrd}
    />
  );
};
export { Register };

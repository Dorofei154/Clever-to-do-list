import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import { LoginContext } from "../../context/context";

import { RegisterView } from "../views/Register/Register";

const RegisterContainerComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const text = "Registration";
  const history = useHistory();
  const { handleRegistration } = useContext(LoginContext);
  const handleChangePassowrd = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  return (
    <RegisterView
      password={password}
      email={email}
      text={text}
      handleRegistration={handleRegistration}
      history={history}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassowrd}
    />
  );
};

export const RegisterContainer = RegisterContainerComponent;

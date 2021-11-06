import  { useCallback, useState } from "react";

import { RegisterView } from "../views/Register/Register";

const RegisterContainerComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassowrd}
    />
  );
};

export const RegisterContainer = RegisterContainerComponent;


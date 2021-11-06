import  { useCallback, useState } from "react";
import "./Login.styles.ts";



import { LoginView } from "../views/Login/Login";

const LoginContainerComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 
  
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
      handleChangePassowrd={handleChangePassowrd}
      handleChangeEmail={handleChangeEmail}
    />
  );
};
export const LoginContainer = LoginContainerComponent;

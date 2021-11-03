import React, { useState } from "react";
import { S } from "./Register.styles";
import { signup } from "../../firebase";

import { EnterForm } from "../../controls/Form/Form";
import { useHistory } from "react-router";
import { ROUTES } from "../../constants/constants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const ChangeInput = (e: { target: HTMLInputElement }) => {
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
    <S.Container>
      <EnterForm
        header='Registration'
        password={password}
        ChangeInput={ChangeInput}
        email={email}
        handleFunction={handleRegistration}
        text='Registration'
      />
    </S.Container>
  );
};
export { Register };

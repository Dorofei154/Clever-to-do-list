import React, { memo } from "react";

import { EnterForm } from "../../../controls/Form/EnterForm";
import { S } from "./Login.styles";

const LoginComponent = ({
    password,
    email,
    changeInput,
    handleLogin,
  }: {
    [key: string]: any;
  }) => {
  return (
    <S.Container>
      <EnterForm
        header='Login'
        password={password}
        email={email}
        changeInput={changeInput}
        handleFunction={handleLogin}
        text='Sign In'
      />
    </S.Container>
  );
};
export const LoginView = memo(LoginComponent);

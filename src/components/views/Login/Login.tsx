import React, { FC, memo } from "react";

import { EnterForm } from "../../../controls/Form/EnterForm";
import { FormButton } from "../../../controls/FormButton/FormButton";
import { FormLink } from "../../../controls/FormLink/FormLink";
import { S } from "./Login.styles";
import { IProps } from "./Login.types";

const LoginViewComponent: FC<IProps> = ({
  password,
  email,
  handleChangePassowrd,
  handleChangeEmail,
  handleLogin,
}) => {
  const text = "Sign In";
  return (
    <S.Container>
      <EnterForm
        header="Login"
        password={password}
        email={email}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassowrd}
      />
      <FormLink text={text} />

      <FormButton text={text} handleFunction={handleLogin} />
    </S.Container>
  );
};
export const LoginView = memo(LoginViewComponent);

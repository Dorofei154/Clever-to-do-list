import React, { FC, memo } from "react";
import { S } from "./Register.styles";

import { EnterForm } from "../../../controls/Form/EnterForm";
import { FormButton } from "../../../controls/FormButton/FormButton";
import { FormLink } from "../../../controls/FormLink/FormLink";
import { IProps } from "./Register.types";
import { ROUTES } from "../../../constants/constants";

const RegisterViewComponent: FC<IProps> = ({
  password,
  email,
  handleChangeEmail,
  handleChangePassword,
  handleRegistration,
}) => {
  const text = "Registration";
  return (
    <S.Container>
      <EnterForm
        header="Registration"
        password={password}
        email={email}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
      />
      <FormLink text='Login' link={ROUTES.LOGIN_ROUTE} />

      <FormButton text={text} handleFunction={handleRegistration} />
    </S.Container>
  );
};
export const RegisterView = memo(RegisterViewComponent);

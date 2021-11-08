import { memo } from "react";

import { EnterForm } from "../../../controls/Form/EnterForm";
import { FormButton } from "../../../controls/FormButton/FormButton";
import { FormLink } from "../../../controls/FormLink/FormLink";
import { S } from "../../../Global.styles";
import { IProps } from "./Login.types";
import { ROUTES } from "../../../constants/constants";

function LoginViewComponent({
  password,
  email,
  handleChangePassowrd,
  handleChangeEmail,
  text,
  history,
  handleLogin,
}: IProps) {
  return (
    <S.Container>
      <EnterForm
        header="Login"
        password={password}
        email={email}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassowrd}
      />
      <FormLink text="Registration" link={ROUTES.REGISTER_ROUTE} />

      <FormButton
        text={text}
        handleFunction={() => {
          handleLogin(email, password);
          history.push(ROUTES.TODO_ROUTE);
        }}
      />
    </S.Container>
  );
}
export const LoginView = memo(LoginViewComponent);

import  {  memo, useContext } from "react";

import { EnterForm } from "../../../controls/Form/EnterForm";
import { FormButton } from "../../../controls/FormButton/FormButton";
import { FormLink } from "../../../controls/FormLink/FormLink";
import { S } from "./Login.styles";
import { IProps } from "./Login.types";
import { ROUTES } from "../../../constants/constants";
import { LoginContext } from "../../../context/context";
import { useHistory } from "react-router";

function LoginViewComponent({
  password, email, handleChangePassowrd, handleChangeEmail, 
}: IProps) {
  const text = "Sign In";
  const history = useHistory();
  const {handleLogin} = useContext(LoginContext)
  return (
    <S.Container>
      <EnterForm
        header="Login"
        password={password}
        email={email}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassowrd} />
      <FormLink text='Registration' link={ROUTES.REGISTER_ROUTE} />

      <FormButton text={text} handleFunction={() => {
        handleLogin(email,password)
        history.push(ROUTES.TODO_ROUTE);
      }} />
    </S.Container>
  );
}
export const LoginView = memo(LoginViewComponent);

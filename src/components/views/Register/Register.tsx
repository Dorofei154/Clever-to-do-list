import { memo, useContext } from "react";
import { S } from "./Register.styles";

import { EnterForm } from "../../../controls/Form/EnterForm";
import { FormButton } from "../../../controls/FormButton/FormButton";
import { FormLink } from "../../../controls/FormLink/FormLink";
import { ROUTES } from "../../../constants/constants";
import { LoginContext } from "../../../context/context";
import { IProps } from "./Register.types";
import { useHistory } from "react-router";



const RegisterViewComponent = ({password, email, handleChangeEmail, handleChangePassword}:IProps) => {
  const text = "Registration";
  const history = useHistory();
  const {handleRegistration} = useContext(LoginContext)
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

      <FormButton text={text} handleFunction={() => { 
        handleRegistration(email,password)
        history.push(ROUTES.LOGIN_ROUTE)}
        } />
    </S.Container>
  );
};
export const RegisterView = memo(RegisterViewComponent);

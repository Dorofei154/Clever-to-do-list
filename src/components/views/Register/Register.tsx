import React, { memo } from "react";
import { S } from "./Register.styles";

import { EnterForm } from "../../../controls/Form/EnterForm";

const RegisterComponent = ({
  password,
  email,
  changeInput,
  handleRegistration,
}: {
  [key: string]: any;
}) => {
  return (
    <S.Container>
      <EnterForm
        header="Registration"
        password={password}
        changeInput={changeInput}
        email={email}
        handleFunction={handleRegistration}
        text="Registration"
      />
    </S.Container>
  );
};
export const RegisterView = memo(RegisterComponent);

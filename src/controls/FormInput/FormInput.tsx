import { Form, Input } from "antd";
import { FC, memo } from "react";
import { IProps } from "./FormInput.types";

const FormInputComponent: FC<IProps> = ({
  label,
  ruleMessage,
  onChangeHandle,
  value,
  defaultValue = "",
  type,
}) => {
  console.log("value", value);
  console.log("type", type);

  return (
    <Form.Item
      label={`Enter ${label}`}
      name="header"
      rules={[
        {
          required: true,
          message: `Please enter ${ruleMessage}!`,
        },
      ]}
    >
      <Input
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChangeHandle(e.target.value)}
        type={type}
      />
    </Form.Item>
  );
};
export const FormInput = memo(FormInputComponent);

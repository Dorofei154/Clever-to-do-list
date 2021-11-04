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
  return (
    <Form.Item
      label={`Enter ${label}`}
      name={type}
      initialValue={defaultValue}
      rules={[
        {
          required: true,
          message: `Please enter ${ruleMessage}!`,
        },
      ]}
    >
      <Input
        value={value}
        onChange={(e) => onChangeHandle(e.target.value)}
        type={type}
      />
    </Form.Item>
  );
};
export const FormInput = memo(FormInputComponent);

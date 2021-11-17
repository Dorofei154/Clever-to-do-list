import { Form, Input } from 'antd';
import { memo } from 'react';
import { IProps } from './FormInput.types';

const FormInputComponent = ({
  label,
  ruleMessage,
  onChangeHandle,
  value,
  defaultValue = '',
  type
}: IProps) => {
  return (
    <Form.Item
      label={`Enter ${label}`}
      name={type}
      initialValue={defaultValue}
      rules={[
        {
          required: true,
          message: `Please enter ${ruleMessage}!`
        }
      ]}
    >
      <Input
        value={value}
        onFocus={(e) => onChangeHandle(e.target.value)}
        onChange={(e) => onChangeHandle(e.target.value)}
        type={type}
      />
    </Form.Item>
  );
};
export const FormInput = memo(FormInputComponent);

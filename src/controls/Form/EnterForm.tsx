import { Form } from 'antd';
import { memo } from 'react';
import { IProps } from './EnterForm.types';
import { FormInput } from '../FormInput/FormInput';
import { Header } from '../Header/Header';

const EnterFormComponent = ({
  header,
  email,
  password,
  handleChangeEmail,
  handleChangePassword
}: IProps) => {
  return (
    <Form
      name="EnterFormComponent"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        offset: 1,
        span: 8
      }}
    >
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16
        }}
      >
        <Header text={header} />
      </Form.Item>
      <FormInput
        value={email}
        label="email"
        ruleMessage="email"
        type="email"
        onChangeHandle={handleChangeEmail}
      />
      <FormInput
        value={password}
        type="password"
        label="password"
        ruleMessage="password"
        onChangeHandle={handleChangePassword}
      />
    </Form>
  );
};
export const EnterForm = memo(EnterFormComponent);

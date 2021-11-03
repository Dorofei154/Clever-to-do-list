import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import { Header } from "../Header/Header";

const EnterForm = ({
  header,
  email,
  changeInput,
  password,
  handleFunction,
  text,
}: {
  [key: string]: any;
}) => {
  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        offset: 1,
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete='off'
    >
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16,
        }}
      >
        <Header text={header} />
      </Form.Item>
      <Form.Item
        label='Enter login'
        name='header'
        rules={[
          {
            required: true,
            message: "Please enter login!",
          },
        ]}
      >
        <Input
          id='login'
          defaultValue={email}
          value={email}
          onChange={changeInput}
          type='email'
        />
      </Form.Item>
      <Form.Item
        label='Enter password'
        name='description'
        rules={[
          {
            required: true,
            message: "Please enter password!",
          },
        ]}
      >
        <Input
          id='password'
          defaultValue={password}
          value={password}
          onChange={changeInput}
         
          type='password'
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 16,
        }}
      >
        {text === "Sign In" ? (
          <Link to={ROUTES.REGISTER_ROUTE}>Registration</Link>
        ) : (
          <Link to={ROUTES.LOGIN_ROUTE}>Login</Link>
        )}
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16,
        }}
      >
        <Button onClick={handleFunction}>{text}</Button>
      </Form.Item>
    </Form>
  );
};
export { EnterForm };

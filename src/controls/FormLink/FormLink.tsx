
import {  Form } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';


const FormLink = ({
 text
}: {
  [key: string]: any;
}) => { 
     
    return (
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
    )
}
export {FormLink}
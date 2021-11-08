import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { IProps } from './FormLink.types';

const FormLink = ({ text, link }: IProps) => {
  return (
    <Form.Item
      wrapperCol={{
        offset: 9,
        span: 16
      }}
    >
      <Link to={link}>{text}</Link>
    </Form.Item>
  );
};
export { FormLink };

import { Form } from "antd";
import { Link } from "react-router-dom";


const FormLink = ({ text, link }: { [key: string]: string }) => {
  return (
    <Form.Item
      wrapperCol={{
        offset: 9,
        span: 16,
      }}
    >
      <Link to={link}>{text}</Link>
    </Form.Item>
  );
};
export { FormLink };

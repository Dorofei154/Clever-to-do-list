import { Button, Form } from 'antd';
import { IProps } from './FormButton.types';

const FormButton = ({ handleFunction, text }: IProps) => {
  return (
    <Form.Item
      wrapperCol={{
        offset: 12,
        span: 16
      }}
    >
      <Button onClick={handleFunction}>{text}</Button>
    </Form.Item>
  );
};
export { FormButton };

import { Button, Form } from "antd";

const FormButton = ({
  handleFunction,
  text,
}: {
  handleFunction: () => void;
  text: string;
}) => {
  return (
    <Form.Item
      wrapperCol={{
        offset: 12,
        span: 16,
      }}
    >
      <Button onClick={handleFunction}>{text}</Button>
    </Form.Item>
  );
};
export { FormButton };

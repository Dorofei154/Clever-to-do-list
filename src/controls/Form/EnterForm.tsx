import { Form} from "antd";
import { FormButton } from "../FormButton/FormButton";
import { FormInput } from "../FormInput/FormInput";
import { FormLink } from "../FormLink/FormLink";
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
      <FormInput 
         value = {email}
         type = 'email'
         changeInput = {changeInput}
      />
      <FormInput 
         value = {password}
         type = 'password'
         changeInput = {changeInput}
      />
      <FormLink text={text}/>
   
     <FormButton text={text} handleFunction={handleFunction} />
    </Form>
  );
};
export { EnterForm };

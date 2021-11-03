
import {  Form, Input } from 'antd';


const FormInput = ({
  value,
  type,
  changeInput
}: {
  [key: string]: any;
}) => { 
     
    return (
        <Form.Item
          label={`Enter ${type === 'email' ? 'email': 'password'}`}
          name="header"
          rules={[
            {
              required: true,
              message: `Please enter ${type === 'email' ? 'email': 'password'}!`,
            },
          ]}
        >
          <Input 
           id={type} 
           defaultValue={value}
           value={value}  onChange={changeInput}  type={type}/>
        </Form.Item>
    )
}
export {FormInput}

import {  Form, Input, Button } from 'antd';


const FormInput = (props:any) => { 
     
    return (
        <Form.Item
          label={`Enter ${props.type === 'email' ? 'email': 'password'}`}
          name="header"
          rules={[
            {
              required: true,
              message: 'Please enter login!',
            },
          ]}
        >
          <Input 
           id="login" 
           defaultValue={props.value}
           value={props.value} onChange={props.changeInput}  type={props.type}/>
        </Form.Item>
    )
}
export {FormInput}
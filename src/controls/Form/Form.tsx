
import {Props} from '../Input/Input.interfaces'
import {  Form, Input, Button } from 'antd';
import {Link } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import {Header} from '../Header/Header'


const EnterForm = (props:any) => { 
     
    return (
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          offset:1,
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
      wrapperCol={{
        offset: 12,
        span: 16,
      }}
    >
      
      <Header text={props.header}/>
    </Form.Item>
        <Form.Item
          label="Enter login"
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
           defaultValue={props.email}
           value={props.email} onChange={props.ChangeInput} className="input" type='email'/>
        </Form.Item>
        <Form.Item
          label="Enter password"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please enter password!',
            },
          ]}
        >
         <Input 
           id="password" 
           defaultValue={props.password}
           value={props.password} onChange={props.ChangeInput} className="input" type='password'/>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
{props.text ==='Sign In' ? <Link to={ROUTES.REGISTER_ROUTE} >Registration</Link> : <Link to={ROUTES.LOGIN_ROUTE} >Login</Link> }
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          
          <Button onClick={props.handleFunction}>{props.text}</Button>
        </Form.Item>
        
      </Form>
    )
}
export {EnterForm}
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {addTodo, useAuth} from '../../firebase'
import {  useHistory } from 'react-router-dom';
import { ROUTES } from "../../constants/constants";
import { Button,  Form, Input, DatePicker } from 'antd';
import moment from 'moment';
import { S } from './Newtodo.styles';

export const Newtodo = (props:any) =>{
    const changeInfo:any = props.location.state;
    const [newTodo, setnewTodo] = useState(changeInfo ? changeInfo[0]['data']['res']:"");
    const [newHeader, setnewheaeder] = useState(changeInfo ? changeInfo[0]['data']['header']:"");
    const [newDate, setnewDate] = useState(changeInfo ? moment(`2021-${changeInfo[0]['data']['month']+1}-${changeInfo[0]['data']['date']}`) : '');
    const currentUser:any = useAuth();
    const history = useHistory();
    const { TextArea } = Input;
    
    
    function onChange(date:any, dateString:any) {
        console.log(date, dateString);
        setnewDate(dateString)
      }
      const changeInput = (e:any) => {
        console.log()
        e.target.id === 'inToDo' ? setnewTodo(e.target.value) :  setnewheaeder(e.target.value)
      };
      const Addtodo = (e:any) => {

        history.push(ROUTES.TODO_ROUTE)
        addTodo(newTodo, currentUser['email'] , newDate, newHeader, changeInfo ?  changeInfo[0]['index'] : null)
      };

      const onFinish = (values:any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <S.Container>
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Enter header"
        name="header"
        rules={[
          {
            required: true,
            message: 'Please enter header!',
          },
        ]}
      >
        <Input 
         id="headertodo" 
         value={newHeader}
         defaultValue={newHeader}
          onChange={changeInput} />
      </Form.Item>
      <Form.Item
        label="Enter description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please enter description!',
          },
        ]}
      >
        <TextArea showCount id="inToDo"
          value={newTodo}
          defaultValue={newTodo}
          onChange={changeInput} maxLength={100}  />
      </Form.Item>

      <Form.Item
        label="Select date"
        name="date"
        rules={[
          {
            required: true,
            message: 'Please enter description!',
          },
        ]}
      >
          <DatePicker defaultValue={changeInfo ? moment(`2021-${changeInfo[0]['data']['month']}-${changeInfo[0]['data']['date']}`): undefined}    
          onChange={onChange} />
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16,
        }}
      >
        
        <Button type="primary" onClick={Addtodo} >
         {changeInfo ? 'Update' : 'Save'}
        </Button>
      </Form.Item>
    </Form>
        
        </S.Container>
    )
}

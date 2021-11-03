import React, { useState, useCallback, useEffect} from "react";
import { getTodo, useAuth, deleteTodo, logout } from "../../firebase";
import {  useHistory  } from 'react-router-dom';
import AdedToDo from "../Addedtodo/Addedtodo";
import { Calendar, Badge, Button } from 'antd';
import {S} from './Inputtodo.styles'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ROUTES } from "../../constants/constants";




 const Todo = () =>{
  
  const history = useHistory()
  const [month, setMonth] = useState("");
  const [date, setDate] = useState('')
  const [value, setValue] = useState(moment(new Date()))
 
  const [arrtodo1, setArrtodo1] = useState<
  {
    index: string;
    data: {
      id: string;
      text: string;
    };
  }[]
>([]);
const currentUser: any = useAuth();

const handleGetTodos = async () => {
  if (currentUser?.email) {
    const todos = await getTodo(currentUser.email);
    
    setArrtodo1(todos);
  }
};

useEffect(() => {
  handleGetTodos();
  console.log("currentUser", currentUser);
}, [currentUser]);

  const onSelect = (value:any) => {
    setMonth(value.month());
    setDate(value.date())
    setValue(value)

  };




  const handleDelete = useCallback(
    (e) => {
      
      deleteTodo(e, currentUser.email)
    
    },
    [arrtodo1]
  );

 
   const getListData = (value:moment.Moment) =>{
    let listData = arrtodo1;
    let listDatares:any = [];
    listData.forEach((item:any) => {
      if(value.date() === item.data.date && value.month() === item.data.month){
        listDatares.push({
          content: item.data.header,
          id: item.id
        })
      }
    })  
    return listDatares || [];
  }

  const dateCellRender =  (value:moment.Moment) => {
    const listData:any = getListData(value);
    return (
      <ul>
        {listData.map((item:any) => {
          
        return (
          <S.List key={item.id}>
            <Badge status='warning' text={item.content} />
          </S.List>
        )})}
      </ul>
    );
  }
 
  const getMonthData = (value:moment.Moment) =>{
    if (value.month() === 8) {
      return 1394;
    }
  }

  const monthCellRender =(value:moment.Moment) =>{
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

 const newtodoroute = (e:{ target: HTMLInputElement; }) => {
   
   const res = arrtodo1.filter((item:any) => {
     return item.index === e.target.id
   })
    history.push(  
      ROUTES.NEWTODO_ROUTE, 
        res
    )
 }
 const handleLogout = async (e:React.MouseEvent<HTMLElement, MouseEvent>) => {

  e.preventDefault();
  try{
    await logout();
    history.push(ROUTES.LOGIN_ROUTE)
  }catch{
      alert('Logout is not available')
  }

}

  return (
   <S.Wrapper>
      <S.Calendar>
         <div className="site-calendar-demo-card">
         <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} value={value} onSelect={onSelect}  />
  </div>
    
      <section className="todoapp">
       
        <ul className="list-todo">
          {arrtodo1
            .filter((item:any) => {
             return item.data.date === date && item.data.month === month
            })
            .map((item:any, index:any) =>
            {
            return (
              <AdedToDo
                handleDelete={handleDelete} 
                handleChange={newtodoroute}
                // handleCheck={handleCheck}
                item={item}
                key={index}
              />
            )})}
        </ul>
        <Link to={ROUTES.NEWTODO_ROUTE}>
         <Button>Add new activity</Button>
        </Link>
        <Button  onClick={handleLogout}>Logout</Button>
      </section>
      </S.Calendar>
      </S.Wrapper>
    
  );
}


export {Todo}
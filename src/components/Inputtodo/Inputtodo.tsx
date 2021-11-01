import React, { useState, useCallback, useEffect} from "react";
import { addTodo, getTodo, useAuth, deleteTodo } from "../../firebase";
import AdedToDo from "../Addedtodo/Addedtodo";
import { Calendar, Badge } from 'antd';
import { type } from "os";





export const Todo: React.FC<{arrTodoValue:any}> = ({arrTodoValue = []}) =>{
  const [newTodo, setnewTodo] = useState("");
  const [newDate, setnewDate] = useState("");
  const [filter, setFilter] = useState("");
  const [arrtodo1, setArrtodo1] = useState([])
  const currentUser:any = useAuth();
  useEffect(() => {
    if(currentUser?.email){
      getTodo(currentUser.email, arrtodo1, setArrtodo1);
    }
  }, [currentUser, arrtodo1])
  const handleDelete = useCallback(
    (e) => {
      
      deleteTodo(e, currentUser.email)
    
    },
    [arrtodo1]
  );
  // const handleCheck = useCallback(
  //   (id) => {
  //     return setArrtodo(
  //       arrTodo.map((item:any) => {
  //         if (item.index === id) {
  //           return { ...item, checked: !item.checked };
  //         }
  //         return item;
  //       })
  //     );
  //   },
  //   [arrTodo]
  // );
  
  const pressEnter = async (e:any) => {
    if (
      (e.code === "Enter" || e.code === "NumpadEnter") &&
      e.target.value !== "" && e.target.id === "inToDo"
    ) {
      addTodo(e, currentUser ? currentUser['email'] : null, newDate, setArrtodo1, arrtodo1 )
      setnewTodo("");
    }
  };

   function getListData(value:any) {
    let listData = arrtodo1;
    let listDatares:any = [];
    listData.forEach((item:any) => {
      if(value.date() === item.data.date && value.month() === item.data.month){
        listDatares.push({
          content: item.data.res,
          id: item.id
        })
      }
    })  
    return listDatares || [];
  }

  const dateCellRender =  (value:any) => {
    const listData:any = getListData(value);
    return (
      <ul>
        {listData.map((item:any) => {
          
        return (
          <li key={item.id}>
            <Badge status='warning' text={item.content} />
          </li>
        )})}
      </ul>
    );
  }
 
  function getMonthData(value:any) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value:any) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  const filterActive = (filter:any) => {
    return setFilter(filter);
  };
  const changeInput = (e:any) => {
    e.target.id === 'inToDo' ? setnewTodo(e.target.value) : setnewDate(e.target.value)
  };

  return (
    <div className="wrap">
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}  />
      <section className="todoapp">
        <input
          type="text"
          id="inToDo"
          value={newTodo}
          onChange={changeInput}
          onKeyDown={pressEnter}
          placeholder="What needs to be done?"
        />
        <input
          type="date"
          id="newDate"
          value={newDate}
          onChange={changeInput}
          onKeyDown={pressEnter}
          placeholder="year-month-day"
        />

        <ul className="list-todo">
          {arrtodo1
            // .filter((item:any) => {
            //   if (filter !== "") {
            //     return item.checked === filter;
            //   }
            //   return item;
            // })
            .map((item:any, index:any) =>
            {
            return (
              <AdedToDo
                handleDelete={handleDelete}
                // handleCheck={handleCheck}
                item={item}
                key={index}
              />
            )})}
        </ul>
      </section>
    </div>
  );
}

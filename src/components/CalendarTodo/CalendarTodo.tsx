import React, { useState, useCallback, useEffect, useContext } from "react";
import { getTodo, deleteTodo, changeTodo } from "../../firebase";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { ROUTES } from "../../constants/constants";
import { CalendarTodoView } from "../views/CalendarTodo/CalendarTodo";
import {DateCellRenderContainer} from '../CellRender/CellRender'
import { DropDownContext } from "../../context/context";

const CalendarTodoContainerComponent = () => {
  const history = useHistory();
  const [month, setMonth] = useState<moment.Moment | number>(0);
  const [date, setDate] = useState<moment.Moment | number>();
  const [value, setValue] = useState(moment(new Date()));

  const [arrtodo, setArrtodo] = useState<
  { id: string; data: { id: string; text: string; done:boolean; header: string; date:moment.Moment | number; month :moment.Moment | number }; }[]
  >([]);
  const {useAuth} = useContext(DropDownContext)
  const currentUser = useAuth();

  const handleGetTodos = async () => {
    if (currentUser?.email) {
      const todos = await getTodo(currentUser.email);
      setArrtodo(todos);
    }
  };

  useEffect(() => {
    handleGetTodos();
  },[currentUser]);

  const onSelect = (value: moment.Moment) => {
    setMonth(value.month());
    setDate(value.date());
    setValue(value);
  };

  const handleChangeTodo = useCallback(
    (e, done) => {
    if(currentUser?.email){
      changeTodo(
        currentUser?.email,
        e,
        done,
      );
    }
  },
  [arrtodo, currentUser]
);
  const handleDelete = useCallback(
    (e) => {
        if(currentUser?.email){
          deleteTodo(e, currentUser?.email);
        }
        setArrtodo(arrtodo.filter((item: { id: string; data: { id: string; text: string; header: string; date: number | moment.Moment; month: number | moment.Moment; }; })=>{ 
       console.log(item) 
       return item.id!== e}))
    },
    [arrtodo, currentUser]
  );

   const getListData = (value: moment.Moment) => {
    const listDatares:{ content: string; id: string }[] = [];
    arrtodo.forEach((item:{ id: string; data: { id: string; text: string; header: string; date: number | moment.Moment; month: number | moment.Moment; }; }) => {
      if (
        value.date() === item.data.date &&
        value.month() === item.data.month
      ) {
        listDatares.push({
          content: item.data.header,
          id: item.id,
        });
      }
    });
    return listDatares || [];
  };

  
  const newTodoRoute = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const targetRes = e.target as HTMLLabelElement;
    const res = arrtodo.filter((item: { id: string; data: { id: string; text: string; header: string; date:moment.Moment | number; month :moment.Moment | number }; }) => {
      return item.id === targetRes.id;
    });
    history.push(ROUTES.NEWTODO_ROUTE, res);
  };
 

  return (
    <CalendarTodoView
      dateCellRender={(e) => DateCellRenderContainer(e, getListData)}
      value={value}
      onSelect={onSelect}
      arrtodo={arrtodo}
      date={date}
      done={false}
      month={month}
      handleDelete={handleDelete}
      newTodoRoute={newTodoRoute}
    
      handleChangeTodo={handleChangeTodo}
    />
  );
};

export const CalendarTodoContainer = CalendarTodoContainerComponent;


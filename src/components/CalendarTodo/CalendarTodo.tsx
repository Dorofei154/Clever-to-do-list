import React, { useState, useCallback, useEffect } from "react";
import { getTodo, useAuth, deleteTodo, logout } from "../../firebase";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { ROUTES } from "../../constants/constants";
import { CalendarTodoView } from "../views/CalendarTodo/CalendarTodo";
import {DateCellRenderContainer} from '../CellRender/CellRender'

const CalendarTodoContainerComponent = () => {
  const history = useHistory();
  const [month, setMonth] = useState<moment.Moment | number>(0);
  const [date, setDate] = useState<moment.Moment | number>();
  const [value, setValue] = useState(moment(new Date()));

  const [arrtodo, setArrtodo] = useState<
  { id: string; data: { id: string; text: string; header: string; date:moment.Moment | number; month :moment.Moment | number }; }[]
  >([]);
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
  const handleLogout = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    try {
      await logout();
      history.push(ROUTES.LOGIN_ROUTE);
    } catch {
      alert("Logout is not available");
    }
  };

  return (
    <CalendarTodoView
      dateCellRender={(e) => DateCellRenderContainer(e, getListData)}
      value={value}
      onSelect={onSelect}
      arrtodo={arrtodo}
      date={date}
      month={month}
      handleDelete={handleDelete}
      newTodoRoute={newTodoRoute}
      handleLogout={handleLogout}
    />
  );
};

export const CalendarTodoContainer = CalendarTodoContainerComponent;

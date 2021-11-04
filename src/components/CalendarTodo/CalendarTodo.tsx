import React, { useState, useCallback, useEffect } from "react";
import { getTodo, useAuth, deleteTodo, logout } from "../../firebase";
import { useHistory } from "react-router-dom";
import { Badge } from "antd";
import { S } from "./CalendarTodo.styles";
import moment from "moment";
import { ROUTES } from "../../constants/constants";
import { CalendarTodoView } from "../views/CalendarTodo/CalendarTodo";

const Todo = () => {
  const history = useHistory();
  const [month, setMonth] = useState<moment.Moment | number>(0);
  const [date, setDate] = useState<moment.Moment | number>();
  const [value, setValue] = useState(moment(new Date()));

  const [arrtodo, setArrtodo] = useState<
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

      setArrtodo(todos);
    }
  };

  useEffect(() => {
    handleGetTodos();
    console.log("currentUser", currentUser);
  }, [currentUser]);

  const onSelect = (value: moment.Moment) => {
    setMonth(value.month());
    setDate(value.date());
    setValue(value);
  };

  const handleDelete = useCallback(
    (e) => {
      deleteTodo(e, currentUser.email);
    },
    [arrtodo]
  );

  const getListData = (value: moment.Moment) => {
    const listDatares:{ content: string; id: string }[] = [];
    arrtodo.forEach((item: any) => {
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

  const dateCellRender = (value: moment.Moment) => {
    const listData: any = getListData(value);
    console.log(listData)
    return (
      <ul>
        {listData.map((item: any) => {
          return (
            <S.List key={item.id}>
              <Badge status='warning' text={item.content} />
            </S.List>
          );
        })}
      </ul>
    );
  };



  const newTodoRoute = (e: { target: HTMLInputElement }) => {
    const res = arrtodo.filter((item: any) => {
      return item.index === e.target.id;
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
      dateCellRender={dateCellRender}
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

export { Todo };

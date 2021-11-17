import React, { useCallback, useEffect, useContext, useState } from 'react';
import { getTodo, deleteTodo, changeTodo } from '../../firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { ROUTES } from '../../constants/constants';
import { CalendarTodoView } from '../views/CalendarTodo/CalendarTodo';
import { DateCellRenderContainer } from '../CellRender/CellRender';
import { LoginContext } from '../../context/context';
import { IArrTodo } from './arrTodo.types';
import { useDispatch, useSelector } from 'react-redux';
import { monthCreator } from '../../store/actionCreators/monthCreator';
import { dateCreator } from '../../store/actionCreators/dateCreator';
import { valueCreator } from '../../store/actionCreators/valueCreator';

const CalendarTodoContainerComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const history = useHistory();

  const setMonth = (e: any) => {
    dispatch(monthCreator(e));
  };
  const setDate = (e: any) => {
    dispatch(dateCreator(e));
    console.log(state);
  };

  const setValue = (e: any) => {
    dispatch(valueCreator(e));
    console.log(state.date);
  };

  // const setArrtodo = (e: any) => {
  //   dispatch(arrtodoCreator(e));
  //   console.log(state.arrtodo);
  // };

  const { handleLogout, useAuth } = useContext(LoginContext);
  const [arrtodo, setArrtodo] = useState<IArrTodo[]>([]);

  const currentUser = useAuth();

  useEffect(() => {
    const handleGetTodos = async () => {
      if (currentUser?.email) {
        const todos = await getTodo(currentUser.email);
        setArrtodo(todos);
      }
    };
    handleGetTodos();
  }, [currentUser]);

  const onSelect = (value: moment.Moment) => {
    console.log(value.date());
    setMonth(value.month());
    setDate(value.date());
    setValue(value);
  };

  const handleChangeTodo = useCallback(
    (e, done) => {
      if (currentUser?.email) {
        changeTodo(currentUser?.email, e, done);
        setArrtodo(
          arrtodo.map((item: IArrTodo) => {
            if (item.id === e) {
              return {
                ...item,
                data: {
                  ...item.data,
                  done: !item.data.done
                }
              };
            }
            return item;
          })
        );
      }
    },
    [arrtodo, currentUser]
  );

  const handleDelete = useCallback(
    (e) => {
      if (currentUser?.email) {
        deleteTodo(e, currentUser?.email);
      }
      setArrtodo(
        arrtodo.filter((item: IArrTodo) => {
          return item.id !== e;
        })
      );
    },
    [arrtodo, currentUser]
  );

  const getListData = (value: moment.Moment) => {
    const listDatares: { content: string; id: string }[] = [];
    arrtodo.forEach((item: IArrTodo) => {
      if (
        value.date() === item.data.date &&
        value.month() === item.data.month
      ) {
        listDatares.push({
          content: item.data.header,
          id: item.id
        });
      }
    });
    return listDatares || [];
  };

  const newTodoRoute = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const resId = e.target as HTMLLabelElement;
    const res = arrtodo.filter((item: IArrTodo) => {
      return item.id === resId.id;
    });
    history.push(ROUTES.NEWTODO_ROUTE, res);
  };
  return (
    <CalendarTodoView
      dateCellRender={(value) => (
        <DateCellRenderContainer value={value} getListData={getListData} />
      )}
      value={state.value}
      onSelect={onSelect}
      arrtodo={arrtodo}
      date={state.date}
      month={state.month}
      history={history}
      handleLogout={handleLogout}
      handleDelete={handleDelete}
      newTodoRoute={newTodoRoute}
      handleChangeTodo={handleChangeTodo}
    />
  );
};

export const CalendarTodoContainer = CalendarTodoContainerComponent;

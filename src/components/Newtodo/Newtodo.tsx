import React, { memo, useCallback, useContext, useEffect } from 'react';
import { addTodo } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import moment from 'moment';
import { NewtodoView } from '../views/Newtodo/Newtodo';
import { LoginContext } from '../../context/context';
import { IProps } from './Newtodo.types';
import { useDispatch, useSelector } from 'react-redux';
import { newTodoCreator } from '../../store/actionCreators/newTodoCreator';
import { newHeaderCreator } from '../../store/actionCreators/newHeaderCreator';
import { newDateCreator } from '../../store/actionCreators/newDateCreator';

const NewtodoContainerComponent = ({ location }: IProps) => {
  const changeInfo = location.state;
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  const setNewTodo = useCallback(
    (e: any) => {
      dispatch(newTodoCreator(e));
    },
    [dispatch]
  );
  const setNewHeader = useCallback(
    (e: any) => {
      dispatch(newHeaderCreator(e));
    },
    [dispatch]
  );
  const setNewDate = useCallback(
    (e: any) => {
      dispatch(newDateCreator(e));
    },
    [dispatch]
  );
  useEffect(() => {
    if (changeInfo) {
      setNewTodo(changeInfo[0].data.res);
      setNewHeader(changeInfo[0].data.header);
      setNewDate(
        moment(
          `2021-${Number(changeInfo[0]['data']['month']) + 1}-${
            changeInfo[0]['data']['date']
          }`
        )
      );
    }
  }, [changeInfo, setNewDate, setNewHeader, setNewTodo]);
  const { useAuth } = useContext(LoginContext);
  const currentUser = useAuth();
  const history = useHistory();
  const onChange = (value: moment.Moment | null, dateString: string) => {
    const res = moment(dateString);
    setNewDate(res);
  };
  const changeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.target.id === 'inToDo'
      ? setNewTodo(e.target.value)
      : setNewHeader(e.target.value);
  };
  const addtodoHandler = () => {
    history.push(ROUTES.TODO_ROUTE);
    if (currentUser?.email) {
      addTodo(
        state.newTodo,
        currentUser?.email,
        String(state.newDate),
        state.header,
        changeInfo ? changeInfo[0].id : String(Date.now())
      );
    }
  };

  return (
    <NewtodoView
      newHeader={state.header}
      changeInput={changeInput}
      newTodo={state.newTodo}
      onChange={onChange}
      changeInfo={changeInfo}
      Addtodo={addtodoHandler}
    />
  );
};
export const NewtodoContainer = memo(NewtodoContainerComponent);

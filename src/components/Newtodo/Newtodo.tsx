import React, { useState } from "react";
import { addTodo, useAuth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import moment from "moment";
import { NewtodoView } from "../views/Newtodo/Newtodo";

const NewtodoComponent = (props: any) => {
  const changeInfo = props.location.state;
  const [newTodo, setNewTodo] = useState(
    changeInfo ? changeInfo[0]["data"]["res"] : ""
  );
  const [newHeader, setNewHeaeder] = useState(
    changeInfo ? changeInfo[0]["data"]["header"] : ""
  );
  const [newDate, setnewDate] = useState(
    changeInfo
      ? moment(
          `2021-${changeInfo[0]["data"]["month"] + 1}-${
            changeInfo[0]["data"]["date"]
          }`
        )
      : ""
  );
  const currentUser: any = useAuth();
  const history = useHistory();

  function onChange(dateString: moment.Moment) {
    setnewDate(dateString);
  }
  const changeInput = (e: { target: HTMLInputElement }) => {
    e.target.id === "inToDo"
      ? setNewTodo(e.target.value)
      : setNewHeaeder(e.target.value);
  };
  const AddtodoHandler = () => {
    history.push(ROUTES.TODO_ROUTE);
    addTodo(
      newTodo,
      currentUser["email"],
      newDate,
      newHeader,
      changeInfo ? changeInfo[0]["index"] : String(Date.now())
    );
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <NewtodoView
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      newHeader={newHeader}
      changeInput={changeInput}
      newTodo={newTodo}
      onChange={onChange}
      changeInfo={changeInfo}
      Addtodo={AddtodoHandler}
    />
  );
};
export const Newtodo = NewtodoComponent
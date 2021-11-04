import React, { useState } from "react";
import { addTodo, useAuth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import moment from "moment";
import { NewtodoView } from "../views/Newtodo/Newtodo";

export const Newtodo = (props: any) => {
  const changeInfo: any = props.location.state;
  const [newTodo, setnewTodo] = useState(
    changeInfo ? changeInfo[0]["data"]["res"] : ""
  );
  const [newHeader, setnewheaeder] = useState(
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

  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
    setnewDate(dateString);
  }
  const changeInput = (e: any) => {
    e.target.id === "inToDo"
      ? setnewTodo(e.target.value)
      : setnewheaeder(e.target.value);
  };
  const Addtodo = (e: any) => {
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
      Addtodo={Addtodo}
    />
  );
};

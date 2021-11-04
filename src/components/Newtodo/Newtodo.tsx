import React, { useState } from "react";
import { addTodo, useAuth } from "../../firebase";
import { useHistory,  } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import moment from "moment";
import { NewtodoView } from "../views/Newtodo/Newtodo";





const NewtodoContainerComponent = ( {location}:{location:{
  pathname: string; key: string; hash: string; search: string; state: {0:{id:string; data:{date:moment.Moment;month:moment.Moment; res:string; header:string;}}}
}} ) => {

  const changeInfo = location.state;
  const [newTodo, setNewTodo] = useState(
    changeInfo ? changeInfo[0]["data"]["res"] : ""
  );
  const [newHeader, setNewHeaeder] = useState(changeInfo ? changeInfo[0]["data"]["header"] : "");
  const [newDate, setnewDate] = useState(
    changeInfo
      ? moment(
          `2021-${Number(changeInfo[0]["data"]["month"])+1}-${
            changeInfo[0]["data"]["date"]
          }`
        )
      : moment()
  );
  const currentUser = useAuth();
  const history = useHistory();

  const onChange = (value: moment.Moment | null, dateString: string) => {
   const res = moment(dateString)
    setnewDate(res);
  }
  const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    e.target.id === "inToDo"
      ? setNewTodo(e.target.value)
      : setNewHeaeder(e.target.value);
  };
  const addtodoHandler = () => {
    
    history.push(ROUTES.TODO_ROUTE);
    addTodo(
      newTodo,
      currentUser?.email,
      String(newDate),
      newHeader,
      changeInfo ? changeInfo[0]["id"] : String(Date.now())
    );
  };



  return (
    <NewtodoView
      newHeader={newHeader}
      changeInput={changeInput}
      newTodo={newTodo}
      onChange={onChange}
      changeInfo={changeInfo}
      Addtodo={addtodoHandler}
    />
  );
};
export const NewtodoContainer = NewtodoContainerComponent



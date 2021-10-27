import React, { useState, useCallback, useEffect } from "react";
import { addTodo } from "../../firebase";
import AdedToDo from "../Addedtodo/Addedtodo";


export default function Todolist() {
  const [arrTodo, setArrtodo] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const [filter, setFilter] = useState("");
  // const handleDelete = useCallback(
  //   (id) => {
  //     return setArrtodo(arrTodo.filter((item:any) => item.index !== id));
  //   },
  //   [arrTodo]
  // );
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

  // let pressEnter = (e) => {
   
  //   if (
  //     (e.code === "Enter" || e.code === "NumpadEnter") &&
  //     e.target.value !== ""
  //   ) {
  //   addTodo(e)
  //     setArrtodo([
  //       ...arrTodo,
  //       {
  //         value: newTodo,
  //         checked: false,
  //         index: Date.now(),
  //       },
  //     ]);
  //     setnewTodo("");
  //   }
  // };

 

  const filterActive = (filter:any) => {
    return setFilter(filter);
  };
  // const changeInput = (e) => {
  //   return setnewTodo(e.target.value);
  // };

  return (
    <div className="wrap">
      <section className="todoapp">
        <input
          type="text"
          id="inToDo"
          value={newTodo}
          // onChange={changeInput}
          // onKeyDown={pressEnter}
          placeholder="What needs to be done?"
        />
        <ul className="list-todo">
          {arrTodo
            .filter((item:any) => {
              if (filter !== "") {
                return item.checked === filter;
              }
              return item;
            })
            .map((item, index) => (
              <AdedToDo
                // handleDelete={handleDelete}
                // handleCheck={handleCheck}
                item={item}
                key={index}
              />
            ))}
        </ul>
      </section>
    </div>
  );
}

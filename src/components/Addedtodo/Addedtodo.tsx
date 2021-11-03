import React from "react";
import {S} from './Added.styles'


export default function AddedToDo(props:any) {
  const {
    item: { index, data, checked },
    handleCheck,
    handleDelete,
    handleChange
  } = props;
  return (
    <div className="added-todo">
      <S.Label  id={index} onClick={handleChange}  className={checked ? "checkedText" : "Text"}>
        {data.header} 
      </S.Label>
      <span onClick={() => handleDelete(index)} className="cross">
        &#x2716;
      </span>
    </div>
  );
}
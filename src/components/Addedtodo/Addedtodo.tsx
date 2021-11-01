import React from "react";

export default function AddedToDo(props:any) {
  const {
    item: { index, data, checked },
    handleCheck,
    handleDelete,
  } = props;
  return (
    <div className="added-todo">
      <input
        onClick={() => handleCheck(index)}
        id={index}
        type="checkbox"
      />
      <div className={checked ? "checkedMark" : "mark"}>
        {checked ? "✓" : ""}
      </div>
      <label  className={checked ? "checkedText" : "Text"}>
        {data.res} !!!!
        {index}
      </label>
      <span onClick={() => handleDelete(index)} className="cross">
        &#x2716;
      </span>
    </div>
  );
}
import React from "react";

export default function AddedToDo(props:any) {
  const {
    item: { index, value, checked },
    handleCheck,
    handleDelete,
  } = props;
  return (
    <div className="added-todo">
      <input
        onClick={() => handleCheck(index)}
        id={`check${index}`}
        type="checkbox"
      />
      <div className={checked ? "checkedMark" : "mark"}>
        {checked ? "✓" : ""}
      </div>
      <label  className={checked ? "checkedText" : "Text"}>
        {value}
      </label>
      <span onClick={() => handleDelete(index)} className="cross">
        &#x2716;
      </span>
    </div>
  );
}
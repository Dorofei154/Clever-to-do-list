import React from "react";
import { S } from "./Added.styles";

const AddedToDo = ({
  item: { index, data },
  handleDelete,
  handleChange,
}: {
  [key: string]: any;
}) => {
  return (
    <S.Div>
      <S.Label id={index} onClick={handleChange}>
        {data.header}
      </S.Label>
      <S.Span onClick={() => handleDelete(index)}>&#x2716;</S.Span>
    </S.Div>
  );
};

export { AddedToDo };

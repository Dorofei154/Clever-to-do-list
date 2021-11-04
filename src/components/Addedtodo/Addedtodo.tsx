import React from "react";
import { S } from "./Added.styles";

const AddedToDoContainerComponent = ({
  item: { id, data },
  handleDelete,
  handleChange,
}: {
  item:{ id: string; data: { id: string; text: string; header: string; date: number | moment.Moment; month: number | moment.Moment; }; };
  handleDelete: (id:string)=>void;
  handleChange: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>)=> void
} ) => {
  return (
    <S.Div>
      <S.Label id={id} onClick={handleChange}>
        {data.header}
      </S.Label>
      <S.Span onClick={() => handleDelete(id)}>&#x2716;</S.Span>
    </S.Div>
  );
};

export const AddedToDoContainer = AddedToDoContainerComponent;

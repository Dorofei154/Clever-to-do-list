import { Checkbox } from "antd";
import { S } from "./Added.styles";
import { IProps } from "./Addedtodo.types";

const AddedToDoContainerComponent = ({
  item: { id, data },
  handleDelete,
  handleChange,
  handleChangeTodo,
}: IProps ) => { 
    return (
    <S.Div>
      <Checkbox checked={data.done} onClick={() =>{
        handleChangeTodo(id, data.done)
      }} />
      <S.Label id={id} onClick={handleChange}>
        {data.header}
      </S.Label>
      <S.Span onClick={() => handleDelete(id)}>&#x2716;</S.Span>
    </S.Div>
  );
};

export const AddedToDoContainer = AddedToDoContainerComponent;

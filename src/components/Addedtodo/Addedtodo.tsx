import { Checkbox } from 'antd';
import { memo } from 'react';
import { S } from '../../Global.styles';
import { IProps } from './Addedtodo.types';

const AddedToDoContainerComponent = ({
  item: { id, data },
  handleDelete,
  handleChange,
  handleChangeTodo
}: IProps) => {
  const handleWrapperChangeTodo = () => {
    return handleChangeTodo(id, data.done);
  };

  const handleWrapperHandleDelete = () => {
    return handleDelete(id);
  };

  return (
    <S.Div>
      <Checkbox checked={data.done} onClick={handleWrapperChangeTodo} />
      <S.Label id={id} onClick={handleChange}>
        {data.header}
      </S.Label>
      <S.Span onClick={handleWrapperHandleDelete}>&#x2716;</S.Span>
    </S.Div>
  );
};

export const AddedToDoContainer = memo(AddedToDoContainerComponent);

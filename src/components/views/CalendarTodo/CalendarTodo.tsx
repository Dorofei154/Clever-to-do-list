import React, { memo } from "react";

import {AddedToDo} from "../../Addedtodo/Addedtodo";
import { Calendar, Badge, Button } from "antd";
import { S } from "./CalendarTodo.styles";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const TodoComponent = ({
  dateCellRender,
  monthCellRender,
  value,
  onSelect,
  arrtodo,
  date,
  month,
  handleDelete,
  newTodoRoute,
  handleLogout,
}: {
  [key: string]: any;
}) => {
  return (
    <S.Wrapper>
      <S.Calendar>
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          value={value}
          onSelect={onSelect}
        />

        <S.Section>
          <S.Ul>
            {arrtodo
              .filter((item: any) => {
                return item.data.date === date && item.data.month === month;
              })
              .map((item: any, index: any) => {
                return (
                  <AddedToDo
                    handleDelete={handleDelete}
                    handleChange={newTodoRoute}
                    item={item}
                    key={index}
                  />
                );
              })}
          </S.Ul>
          <Link to={ROUTES.NEWTODO_ROUTE}>
            <Button>Add new activity</Button>
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </S.Section>
      </S.Calendar>
    </S.Wrapper>
  );
};

export const CalendarTodoView = memo(TodoComponent);

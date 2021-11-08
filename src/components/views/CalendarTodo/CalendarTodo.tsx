import React, { memo } from "react";

import { AddedToDoContainer } from "../../Addedtodo/Addedtodo";
import { Calendar, Button } from "antd";
import { S } from "../../../Global.styles";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";
import { IProps } from "./CalendarTodo.types";
import { IArrTodo } from "../../CalendarTodo/arrTodo.types";

const CalendarContainerComponentView = ({
  dateCellRender,
  value,
  onSelect,
  arrtodo,
  date,
  month,
  handleLogout,
  history,
  handleDelete,
  newTodoRoute,
  handleChangeTodo,
}: IProps) => {
  return (
    <S.Wrapper>
      <S.Calendar>
        <Calendar
          dateCellRender={dateCellRender}
          value={value}
          onSelect={onSelect}
        />

        <S.Section>
          <S.Ul>
            {arrtodo
              .filter((item: IArrTodo) => {
                return item.data.date === date && item.data.month === month;
              })
              .map((item, index) => {
                return (
                  <AddedToDoContainer
                    handleChangeTodo={handleChangeTodo}
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
          <Button
            onClick={() => {
              handleLogout();
              history.push(ROUTES.LOGIN_ROUTE);
            }}
          >
            Logout
          </Button>
        </S.Section>
      </S.Calendar>
    </S.Wrapper>
  );
};

export const CalendarTodoView = memo(CalendarContainerComponentView);

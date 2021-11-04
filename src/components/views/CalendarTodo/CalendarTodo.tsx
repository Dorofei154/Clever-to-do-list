import React, { memo } from "react";

import { AddedToDoContainer } from "../../Addedtodo/Addedtodo";
import { Calendar, Button } from "antd";
import { S } from "./CalendarTodo.styles";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const CalendarContainerComponentView = ({
  dateCellRender,
  value,
  onSelect,
  arrtodo,
  date,
  month,
  handleDelete,
  newTodoRoute,
  handleLogout,
}: {
  value: moment.Moment;
  dateCellRender:  (value: moment.Moment) => JSX.Element;
  onSelect:(value: moment.Moment) => void
  arrtodo: {
    id: string;
    data: {
        id: string;
        text: string;
        header: string;
        date: moment.Moment | number;
        month: moment.Moment | number;
    };
}[];
  date: number | moment.Moment | undefined;
  month: number | moment.Moment;
  handleDelete: (e: string) => void;
  newTodoRoute: ( e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  handleLogout: (e: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<void>
}) => {
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
              .filter((item: { id: string; data: { id: string; text: string; header: string; date:moment.Moment | number; month :moment.Moment | number }; }) => {
                return item.data.date === date && item.data.month === month;
              })
              .map((item,index) => {
                return (
                  <AddedToDoContainer
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

export const CalendarTodoView = memo(CalendarContainerComponentView);

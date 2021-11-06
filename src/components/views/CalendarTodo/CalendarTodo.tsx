import React, { memo, useContext } from "react";

import { AddedToDoContainer } from "../../Addedtodo/Addedtodo";
import { Calendar, Button } from "antd";
import { S } from "./CalendarTodo.styles";
import { Link, useHistory } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";
import { IProps } from "./CalendarTodo.types";
import { LoginContext } from "../../../context/context";

const CalendarContainerComponentView = ({
  dateCellRender,
  value,
  onSelect,
  arrtodo,
  date,
  month,
  handleDelete,
  newTodoRoute,
  handleChangeTodo
}: 
  IProps
) => {
  const {handleLogout} = useContext(LoginContext)
  
  const history = useHistory();
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
          <Button onClick={() => {
            handleLogout()
            history.push(ROUTES.LOGIN_ROUTE)}
          }>Logout</Button>
        </S.Section>
      </S.Calendar>
    </S.Wrapper>
  );
};

export const CalendarTodoView = memo(CalendarContainerComponentView);

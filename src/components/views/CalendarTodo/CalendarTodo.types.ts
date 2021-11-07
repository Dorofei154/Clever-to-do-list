import { RouteComponentProps } from "react-router";

export interface IProps {
  value: moment.Moment;
  dateCellRender: (value: moment.Moment ) => JSX.Element | null ;
  onSelect:(value: moment.Moment) => void
  arrtodo: {
    id: string;
    data: {
        id: string;
        text: string;
        header: string;
        date: moment.Moment | number;
        month: moment.Moment | number;
        done:boolean
    };
}[];
  history: RouteComponentProps["history"];
  date: number | moment.Moment | undefined;
  handleLogout: () => void
  month: number | moment.Moment;
  handleDelete: (e: string) => void;
  newTodoRoute: ( e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  handleChangeTodo: (e: string, done:boolean) => void
}

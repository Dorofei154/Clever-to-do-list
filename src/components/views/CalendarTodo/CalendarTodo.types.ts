export interface IProps {
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
        done:boolean
    };
}[];
  date: number | moment.Moment | undefined;
  month: number | moment.Moment;
  done: boolean;
  handleDelete: (e: string) => void;
  newTodoRoute: ( e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  handleLogout: (e: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<void>;
  handleChangeTodo: (e: string, done:boolean) => void
}

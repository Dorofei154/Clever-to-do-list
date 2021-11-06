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
  handleDelete: (e: string) => void;
  newTodoRoute: ( e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  handleChangeTodo: (e: string, done:boolean) => void
}

export interface IProps {
  newHeader: string;
  changeInput: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  newTodo: string;
  onChange: (value: moment.Moment | null, dateString: string) => void;
  changeInfo: {
    0: {
      id: string;
      data: {
        date: moment.Moment;
        month: moment.Moment;
        res: string;
        header: string;
      };
    };
  };
  Addtodo: () => void;
}

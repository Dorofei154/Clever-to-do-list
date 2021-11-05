export interface IProps {
  item:{ id: string; data: { id: string; text: string; done:boolean; header: string; date: number | moment.Moment; month: number | moment.Moment; }; };
  handleDelete: (id:string)=>void;
  handleChange: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>)=> void;
  handleChangeTodo: (e: string, done: boolean) => void
}

export interface IProps {
  value: moment.Moment;
  getListData: (value: moment.Moment) => { content: string; id: string }[];
}

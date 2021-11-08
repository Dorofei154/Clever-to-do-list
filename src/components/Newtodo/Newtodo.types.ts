export interface IProps {
  location: {
    pathname: string;
    key: string;
    hash: string;
    search: string;
    state: {
      0: {
        id: string;
        data: {
          date: moment.Moment;
          month: moment.Moment;
          done: boolean;
          res: string;
          header: string;
        };
      };
    };
  };
}

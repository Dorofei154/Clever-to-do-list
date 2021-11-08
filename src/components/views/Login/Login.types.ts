import { RouteComponentProps } from 'react-router';

export interface IProps {
  password: string;
  email: string;
  handleChangePassowrd: (text: string) => void;
  handleChangeEmail: (text: string) => void;
  text: string;
  history: RouteComponentProps['history'];
  handleLogin: (email: string, password: string) => void;
}

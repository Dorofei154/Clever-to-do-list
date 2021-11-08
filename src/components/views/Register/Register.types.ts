import { RouteComponentProps } from 'react-router';

export interface IProps {
  password: string;
  email: string;
  handleChangeEmail: (text: string) => void;
  handleChangePassword: (text: string) => void;
  text: string;
  history: RouteComponentProps['history'];
  handleRegistration: (email: string, password: string) => void;
}

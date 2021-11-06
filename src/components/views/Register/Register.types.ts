export interface IProps {
  password: string;
  email: string;
  handleChangeEmail: (text: string) => void;
  handleChangePassword: (text: string) => void;
}

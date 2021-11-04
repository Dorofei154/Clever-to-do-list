export interface IProps {
  header: string;
  email: string;
  handleChangeEmail: (text: string) => void;
  handleChangePassword: (text: string) => void;
  password: string;
}

export interface IProps {
  password: string;
  email: string;
  handleChangePassowrd: (text: string) => void;
  handleChangeEmail: (text: string) => void;
}

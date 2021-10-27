export interface Props {
    children: React.ReactNode;
    className: string;
    text: string;
    name:string;
    ref: React.MutableRefObject<HTMLInputElement | null>;
  }
  
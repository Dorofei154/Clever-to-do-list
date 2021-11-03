import { Props } from "./Button.interfaces"
export const Button = ({disabled, text,handle}: Props) => {
  
    return (
        <button disabled={disabled} onClick={handle}>
            {text}
        </button>
    )
}

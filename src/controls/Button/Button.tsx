import { Props } from './Button.interfaces';
export const Button:  React.FC<Props> = ({disabled, currentUser, text, handle}) => {
    return (
        <button disabled={disabled || currentUser} onClick={handle}>
            {text}
        </button>
    )
}

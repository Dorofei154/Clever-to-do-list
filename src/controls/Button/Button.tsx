export default function Button(props:any) {
    return (
        <button disabled={props.disabled || props.currentUser} onClick={props.handle}>
            {props.text}
        </button>
    )
}

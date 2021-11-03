import React from 'react'
import {Props} from './Header.interfaces'

const Header = (props:any) =>{
    return (
        <h1>
            {props.text}
        </h1>
    )
}

export {Header}
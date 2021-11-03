import React from 'react';
import { Props } from './Input.interfaces';

export const Input = ({className, text, name, value, changeInput}:Props) => (
    <div className={className}>
            <label>Enter {text}
            </label>
            <input value={value} type={name} onChange={changeInput} name={name}/>
        </div>
  );



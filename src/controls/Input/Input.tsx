import React from 'react';
import { Props } from './Input.interfaces';

export const Input:  React.FC<Props> = ({className, text, name, value, changeInput}) => (
    <div className={className}>
            <label>Enter {text}
            </label>
            <input value={value} type={name} onChange={changeInput} name={name}/>
        </div>
  );



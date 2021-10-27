import React from 'react';
import { Props } from './Input.interfaces';

export const Input:  React.FC<Props> = ({className, text, name, ref}) => (
    <div className={className}>
            <label>Enter {text}
            </label>
            <input ref={ref} type={name} />
        </div>
  );



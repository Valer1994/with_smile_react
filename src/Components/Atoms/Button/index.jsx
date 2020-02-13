import React from 'react';
import classnames from 'classnames';

import './style.scss';

const Button = ({
    size,
    onClick,
    className,
    children
}) =>{
    return  <button className ={classnames( 'Button', { [ className ] : className , [size] : size })}
            onClick={onClick}
            >
                {children}
            </button>
}

export default Button;
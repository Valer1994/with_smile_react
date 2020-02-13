import React,{ forwardRef } from 'react';
import classnames from 'classnames';

import './style.scss';

const Paper = forwardRef(({
  style,
  onClick,
  className,
  children,
  ...restProps
}, ref) => (
    <div className = {classnames('paper',{[className] : className})}
      onClick = {onClick}
      style = {style}
      ref = {ref}
      {...restProps}
    >
      {children}
    </div>
));

export default Paper;
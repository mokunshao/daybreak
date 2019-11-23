import React, { InputHTMLAttributes } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './radio.scss';

const baseClass = joinedClass('radio');

export const Radio: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const {
    children, className, onChange, ...rest
  } = props;
  return (
    <label className={classes(baseClass(), className)}>
      <input className={baseClass('input')} type="radio" {...rest} onChange={onChange} />
      <span className={baseClass('checkmark')} />
      {children}
    </label>
  );
};

export default Radio;

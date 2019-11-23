import React, { InputHTMLAttributes, ChangeEventHandler } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';

const baseClass = joinedClass('switch');

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Switch: React.FC<Props> = (props) => {
  const {
    checked, onChange, children, className, ...rest
  } = props;
  return (
    <label className={classes(baseClass(), className)}>
      <input type="checkbox" className={baseClass('input')} onChange={(e) => onChange(e)} checked={checked} {...rest} />
      <span className={baseClass('checkmark')} />
      {children}
    </label>
  );
};

export default Switch;

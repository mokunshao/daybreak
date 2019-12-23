import React, { InputHTMLAttributes } from 'react';
import './checkbox.scss';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';

const baseClass = joinedClass('checkbox');

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<Props> = (props) => {
  const {
    checked, onChange, children, className, ...rest
  } = props;
  return (
    <label className={classes(baseClass(), className)}>
      <input className={baseClass('input')} type="checkbox" checked={checked} onChange={(e) => onChange(e)} {...rest} />
      <span className={baseClass('checkmark')} />
      {children && <div className={baseClass('children')}>{children}</div>}
    </label>
  );
};

export default Checkbox;

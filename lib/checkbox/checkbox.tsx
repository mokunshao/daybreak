import React, { HtmlHTMLAttributes } from 'react';
import './checkbox.scss';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';

const baseClass = joinedClass('checkbox');

interface Props extends HtmlHTMLAttributes<HTMLLabelElement> {
  checked: boolean;
  change: (value: boolean) => void;
}

export const Checkbox: React.FC<Props> = (props) => {
  const {
    checked, change, children, className, ...rest
  } = props;
  return (
    <label className={classes(baseClass(), className)} {...rest}>
      <input className={baseClass('input')} type="checkbox" checked={checked} onChange={(e) => change(e.target.checked)} />
      <span className={baseClass('checkmark')} />
      {children && <div className={baseClass('children')}>{children}</div>}
    </label>
  );
};

export default Checkbox;

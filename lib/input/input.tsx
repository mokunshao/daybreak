import React from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './input.scss';
import Icon from '../icon/icon';

const baseClass = joinedClass('input');

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  clearable?: boolean;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, clearable, ...rest } = props;
  return (
    <div className={baseClass('wrapper')}>
      <input className={classes(baseClass(), className)} {...rest} />
      {clearable && <Icon name="clear" className={baseClass('clear')} />}
    </div>
  );
};


export default Input;

export { Input };

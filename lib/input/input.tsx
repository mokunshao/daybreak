import React from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './input.scss';

const input = joinedClass('input');

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return <input className={classes(input(), className)} {...rest} />;
};


export default Input;

export { Input };

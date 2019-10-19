import React, { ButtonHTMLAttributes } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './button.scss';

const button = joinedClass('button');

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FunctionComponent<Props> = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;
  return <button type="button" className={classes(button(), className)} {...rest}>{children}</button>;
};

export default Button;

export { Button };

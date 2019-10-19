import React, { ButtonHTMLAttributes } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './button.scss';

const button = joinedClass('button');

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'normal' | 'primary' | 'danger'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {
    mode = 'normal',
    className,
    children,
    ...rest
  } = props;
  return <button type="button" className={classes(button(), button(mode), className)} {...rest}>{children}</button>;
};

export default Button;

export { Button };

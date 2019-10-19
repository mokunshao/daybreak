import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
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
    onClick,
    ...rest
  } = props;
  const onClick2: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.blur();
    onClick && onClick(e);
  };
  return <button type="button" onClick={onClick2} className={classes(button(), button(mode), className)} {...rest}>{children}</button>;
};

export default Button;

export { Button };

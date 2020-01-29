import React from 'react';
import joinedClass from '../utils/joinedClass';
import classes from '../utils/classes';

const layout = joinedClass('layout');

type Props = React.HtmlHTMLAttributes<HTMLElement>;

export const Header: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout('header'), className)} {...rest}>{children}</div>
  );
};

export default Header;

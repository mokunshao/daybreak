import React from 'react';
import './layout.scss';
import joinedClass from '../utils/joinedClass';
import classes from '../utils/classes';

const layout = joinedClass('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout(), className)} {...rest}>{children}</div>
  );
};

export default Layout;

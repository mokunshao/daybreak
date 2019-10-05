import React from 'react';
import './layout.scss';
import { jc } from '../utils/joinedClasses';
import classes from '../utils/classes';

const layout = jc('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout(), className)} {...rest}>{children}</div>
  );
};

export default Layout;

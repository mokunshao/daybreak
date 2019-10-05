import React from 'react';
import { jc } from '../utils/joinedClasses';
import classes from '../utils/classes';

const layout = jc('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Footer: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout('footer'), className)} {...rest}>{children}</div>
  );
};

export default Footer;

import React from 'react';
import joinedClass from '../utils/joinedClass';
import classes from '../utils/classes';

const layout = joinedClass('layout');

type Props = React.HtmlHTMLAttributes<HTMLElement>;

const Footer: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout('footer'), className)} {...rest}>{children}</div>
  );
};

export default Footer;

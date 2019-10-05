import React from 'react';
import { jc } from '../utils/joinedClasses';
import classes from '../utils/classes';

const layout = jc('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Content: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout('content'), className)} {...rest}>{children}</div>
  );
};

export default Content;

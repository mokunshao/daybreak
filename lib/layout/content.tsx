import React from 'react';
import joinedClass from '../utils/joinedClass';
import classes from '../utils/classes';

const layout = joinedClass('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Content: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classes(layout('content'), className)} {...rest}>{children}</div>
  );
};

export default Content;

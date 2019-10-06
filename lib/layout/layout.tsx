import React from 'react';
import './layout.scss';
import joinedClass from '../utils/joinedClass';
import classes from '../utils/classes';
import Aside from './aside';

const layout = joinedClass('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactElement | Array<React.ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  let hasAside = false;
  const { className, children, ...rest } = props;
  if (Array.isArray(children)) {
    (children as Array<React.ReactElement>).forEach((element) => {
      element.type === Aside && (hasAside = true);
    });
  }
  return (
    <div className={classes(layout(), className, hasAside ? 'has-aside' : '')} {...rest}>{children}</div>
  );
};

export default Layout;

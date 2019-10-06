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
  const { className, children, ...rest } = props;
  const hasAside = Array.isArray(children) && children.length
    && (children as Array<React.ReactElement>).reduce(
      (result, element) => result || element.type === Aside,
      false,
    );
  return (
    <div className={classes(layout(), className, hasAside ? 'has-aside' : '')} {...rest}>{children}</div>
  );
};

export default Layout;

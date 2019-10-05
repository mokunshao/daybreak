import React from 'react';
import './layout.scss';
import { jc } from '../utils/joinedClasses';

const layout = jc('layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Layout: React.FunctionComponent<Props> = () => (
  <div className={layout()}>layout</div>
);

export default Layout;

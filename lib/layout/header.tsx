import React from 'react';
import { jc } from '../utils/joinedClasses';

const layout = jc('layout');

const Header: React.FunctionComponent = () => (
  <div className={layout('header')}>header</div>
);

export default Header;

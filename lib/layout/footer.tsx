import React from 'react';
import { jc } from '../utils/joinedClasses';

const layout = jc('layout');

const Footer: React.FunctionComponent = () => (
  <div className={layout('footer')}>footer</div>
);

export default Footer;

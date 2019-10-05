import React from 'react';
import { jc } from '../utils/joinedClasses';

const layout = jc('layout');

const Aside: React.FunctionComponent = () => (
  <div className={layout('aside')}>aside</div>
);

export default Aside;

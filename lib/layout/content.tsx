import React from 'react';
import { jc } from '../utils/joinedClasses';

const layout = jc('layout');

const Content: React.FunctionComponent = () => (
  <div className={layout('content')}>content</div>
);

export default Content;

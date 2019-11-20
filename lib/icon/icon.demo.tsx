import React from 'react';
import IconExample from './icon.example';
import Demo from '../../demo';

const code = `import React from 'react';
import {Icon} from 'daybreak';
const IconExample: React.FunctionComponent = () => (
  <div>
    <Icon name="qq" />
    <Icon name="alipay" />
    <Icon name="wechat" />
  </div>
);
export default IconExample;`;

const IconDemo = () => (
  // <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
  <Demo code={code}>
    <IconExample />
  </Demo>
);

export default IconDemo;

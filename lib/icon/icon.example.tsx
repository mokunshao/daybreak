import React from 'react';
import CodePreview from '../code-preview/code-preview';
import Icon from './icon';

const code = `import React from 'react';
import {Icon} from 'daybreak';
const IconExample = () => (
  <div>
    <Icon name="qq" />
    <Icon name="alipay" />
    <Icon name="wechat" />
  </div>
);
export default IconExample;`;

const IconExample = () => (
  <>
    <Icon name="qq" />
    <Icon name="alipay" />
    <Icon name="wechat" />
    <CodePreview code={code} />
  </>
);

export default IconExample;

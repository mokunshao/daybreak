import React from 'react';
import CodePreview from '../code-preview/code-preview';
import Icon from './icon';
import { Table } from '../table/table';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'name',
    'icon name',
    'string',
    '',
    '',
    'true',
  ],
];

const columns2 = ['name', 'icon'];

const data2 = [
  [
    'alipay',
    <Icon name="alipay" />,
  ],
  [
    'qq',
    <Icon name="qq" />,
  ],
  [
    'wechat',
    <Icon name="wechat" />,
  ],
  [
    'caution',
    <Icon name="caution" />,
  ],
  [
    'download',
    <Icon name="download" />,
  ],
  [
    'info',
    <Icon name="info" />,
  ],
  [
    'left',
    <Icon name="left" />,
  ],
  [
    'right',
    <Icon name="right" />,
  ],
  [
    'loading',
    <Icon name="loading" />,
  ],
  [
    'settings',
    <Icon name="settings" />,
  ],
  [
    'thumbs-up',
    <Icon name="thumbs-up" />,
  ],
  [
    'upload',
    <Icon name="upload" />,
  ],
];

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
    <h1>Icon</h1>
    <Icon name="qq" />
    <Icon name="alipay" />
    <Icon name="wechat" />
    <CodePreview code={code} />
    <h2>Props</h2>
    <Table columns={columns} data={data} />
    <h2>Available icons</h2>
    <Table columns={columns2} data={data2} />
  </>
);

export default IconExample;

import React from 'react';
import { Button } from './button';
import { Table } from '../table/table';
import CodePreview from '../code-preview/code-preview';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'mode',
    'mode',
    'string',
    '"normal"/"primary"/"danger"',
    '"normal"',
    'true',
  ],
];

const code = `import React from 'react';
import { Button } from 'daybreak';

export default () => (
  <>
    <h1>Button</h1>
    <Button>normal</Button>
    <Button mode="primary">primary</Button>
    <Button mode="danger">danger</Button>
  </>
);`;

export default () => (
  <>
    <h1>Button</h1>
    <h2>Example</h2>
    <Button>normal</Button>
    <Button mode="primary">primary</Button>
    <Button mode="danger">danger</Button>
    <CodePreview code={code} />
    <h2>Props</h2>
    <Table columns={columns} data={data} />
  </>
);

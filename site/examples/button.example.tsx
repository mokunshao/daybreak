import React from 'react';
import { Button } from '../../src/button/button';
import { Table } from '../../src/table/table';
import CodePreview from '../../src/code-preview/code-preview';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'mode',
    'mode',
    'string',
    '"normal"/"primary"/"danger"',
    '"normal"',
    'false',
  ],
];

const code = `import React from 'react';
import { Button } from 'daybreak';

export default () => (
  <>
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

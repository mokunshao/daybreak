import React, { useState } from 'react';
import Input from '../../lib/input/input';
import Table from '../../lib/table/table';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'clearable',
    '-',
    'boolean',
    '-',
    'false',
    'false',
  ],
];

export default function () {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return (
    <div>
      <h1>Input</h1>
      <h2>Example</h2>
      <h3>Basic Usage</h3>
      <div>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <h3>Clearable</h3>
      <div>
        <Input clearable value={value2} onChange={(e) => setValue2(e.target.value)} />
      </div>
      <h2>Props</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

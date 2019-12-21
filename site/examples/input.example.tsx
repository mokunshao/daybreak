import React from 'react';
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
  return (
    <div>
      <h1>Input</h1>
      <h2>Example</h2>
      <h3>Basic Usage</h3>
      <div>
        <Input />
      </div>
      <h3>Clearable</h3>
      <div>
        <Input clearable />
      </div>
      <h2>Props</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

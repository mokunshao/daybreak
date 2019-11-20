import React from 'react';
import { Button } from './button';
import { Table } from '../table/table';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default'];

const data = [
  [
    'mode',
    'mode',
    'string',
    '"normal"/"primary"/"danger"',
    '"normal"',
  ],
];

export default () => (
  <>
    <div style={{ marginBottom: '0.5em' }}>
      <Button>normal</Button>
    </div>
    <div style={{ marginBottom: '0.5em' }}>
      <Button mode="primary">primary</Button>
    </div>
    <div style={{ marginBottom: '0.5em' }}>
      <Button mode="danger">danger</Button>
    </div>
    <div>
      <h2>Props</h2>
      <Table columns={columns} data={data} />
    </div>
  </>
);

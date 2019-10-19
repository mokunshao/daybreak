import React from 'react';
import { Button } from './button';

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
  </>
);

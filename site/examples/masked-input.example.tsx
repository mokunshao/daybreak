import React, { useState } from 'react';
import MaskedInput from '../../lib/masked-input';
import CodePreview from '../../lib/code-preview/code-preview';
import Table from '../../lib/table/table';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'template',
    '-',
    'string',
    '-',
    '-',
    'true',
  ],
  [
    'value',
    '-',
    'string',
    '-',
    '-',
    'true',
  ],
  [
    'onChange',
    '-',
    'function',
    '-',
    '-',
    'true',
  ],
];

export default function () {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return (
    <div>
      <h1>Masked Input</h1>
      <h2>Example</h2>
      <h3>Basic Usage</h3>
      <MaskedInput
        template="(###) ###-####"
        value={value}
        onChange={(val: string) => { setValue(val); }}
      />
      <div>
        <CodePreview code="" />
      </div>
      <h3>Clearable</h3>
      <MaskedInput
        clearable
        onClear={() => setValue2('')}
        template="### ### ###"
        value={value2}
        onChange={(val: string) => { setValue2(val); }}
      />
      <div>
        <CodePreview code="" />
      </div>
      <h2>Props</h2>
      <Table data={data} columns={columns} />
    </div>
  );
}

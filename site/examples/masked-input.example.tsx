import React, { useState } from 'react';
import MaskedInput from '../../lib/masked-input';
import CodePreview from '../../lib/code-preview/code-preview';
import Table from '../../lib/table/table';

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'mask',
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

const code1 = `import React, { useState } from 'react';
import { MaskedInput } from 'daybreak';
export default function () {
  const [value, setValue] = useState('');
  return (
    <MaskedInput
      mask="(###) ###-####"
      value={value}
      onChange={(val: string) => { setValue(val); }}
    />
  );
}`;

const code2 = `import React, { useState } from 'react';
import { MaskedInput } from 'daybreak';
export default function () {
  const [value2, setValue2] = useState('');
  return (
    <MaskedInput
      clearable
      onClear={() => setValue2('')}
      mask="### ### ###"
      value={value2}
      onChange={(val: string) => { setValue2(val); }}
    />
  );
}`;

export default function () {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return (
    <div>
      <h1>Masked Input</h1>
      <h2>Example</h2>
      <h3>Basic Usage</h3>
      <MaskedInput
        mask="(###) ###-####"
        value={value}
        onChange={(val: string) => { setValue(val); }}
      />
      <div>
        <CodePreview code={code1} />
      </div>
      <h3>Clearable</h3>
      <MaskedInput
        clearable
        onClear={() => setValue2('')}
        mask="### ### ###"
        value={value2}
        onChange={(val: string) => { setValue2(val); }}
      />
      <div>
        <CodePreview code={code2} />
      </div>
      <h2>Props</h2>
      <Table data={data} columns={columns} />
    </div>
  );
}

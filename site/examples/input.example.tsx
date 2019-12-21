import React, { useState } from 'react';
import Input from '../../lib/input/input';
import Table from '../../lib/table/table';
import CodePreview from '../../lib/code-preview/code-preview';

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

const code1 = `import React, { useState } from 'react';
import { Input } from 'daybreak';

export default function () {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
`;

const code2 = `import React, { useState } from 'react';
import { Input } from 'daybreak';

export default function () {
  const [value2, setValue2] = useState('');
  function onClear() {
    setValue2('');
  }
  return (
    <div>
      <Input
        clearable
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        onClear={onClear}
      />
    </div>
  );
}
`;

export default function () {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  function onClear() {
    setValue2('');
  }
  return (
    <div>
      <h1>Input</h1>
      <h2>Example</h2>
      <h3>Basic Usage</h3>
      <div>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <CodePreview code={code1} />
      </div>
      <h3>Clearable</h3>
      <p>
        <code>clearable</code>
        {' '}
        prop and
        {' '}
        <code>onClear</code>
        {' '}
        prop should be used together.
      </p>
      <div>
        <Input
          clearable
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          onClear={onClear}
        />
      </div>
      <div>
        <CodePreview code={code2} />
      </div>
      <h2>Props</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

import React, { useState } from 'react';
import Input from '../../src/input/input';
import Table from '../../src/table/table';
import CodePreview from '../../src/code-preview/code-preview';

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
  [
    'onClear',
    'aciton after clear',
    'function',
    '-',
    '-',
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

const code3 = `import React, { useState } from 'react';
import { Input } from 'daybreak';

export default function () {
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  return (
    <div>
      <Input 
        type="password" 
        value={value3} 
        onChange={(e) => setValue3(e.target.value)} 
      />
      <br />
      <br />
      <Input 
        type="password"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
        clearable
        onClear={() => setValue4('')} 
      />
    </div>
  );
}
`;

export default function () {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
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
      <h3>Input for password</h3>
      <div>
        <Input type="password" value={value3} onChange={(e) => setValue3(e.target.value)} />
        <br />
        <br />
        <Input type="password" clearable value={value4} onChange={(e) => setValue4(e.target.value)} onClear={() => setValue4('')} />
      </div>
      <div>
        <CodePreview code={code3} />
      </div>
      <h2>Props</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

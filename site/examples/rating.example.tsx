import React, { useState } from 'react';
import Rating from '../../lib/rating/rating';
import CodePreview from '../../lib/code-preview/code-preview';
import { Table } from '../../lib/table/table';

const code1 = `import React, { useState } from 'react';
import { Rating } from 'daybreak';
export default function () {
  const [value, setValue] = useState(1);
  return (
    <div>
      <Rating value={value} max={5} onChange={(val) => setValue(val)} />
    </div>
  );
}`;

const code2 = `import React, { useState } from 'react';
import { Rating } from 'daybreak';
export default function () {
  const [value2, setValue2] = useState(3);
  return (
    <div>
      <Rating clearable value={value2} max={6} onChange={(val) => setValue2(val)} />
    </div>
  );
}`;

const columns = ['Attribute', 'Description', 'Type', 'Accepted values', 'Default', 'Required'];

const data = [
  [
    'max',
    'star number',
    'number',
    '-',
    '5',
    'false',
  ],
  [
    'value',
    '-',
    'number',
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
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(3);
  return (
    <div>
      <h1>Rating</h1>
      <h2>Example</h2>
      <h3>Basic Usage</h3>
      <Rating value={value} max={5} onChange={(val) => setValue(val)} />
      <div>
        <CodePreview code={code1} />
      </div>
      <h3>Clearable</h3>
      <Rating clearable value={value2} max={6} onChange={(val) => setValue2(val)} />
      <div>
        <CodePreview code={code2} />
      </div>
      <h2>Props</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

import React, { useState } from 'react';
import MaskedInput from '../../lib/masked-input';

export default function () {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Masked Input</h1>
      <MaskedInput
        mask="(###) ###-####"
        value={value}
        onChange={(val: string) => { setValue(val); }}
      />
    </div>
  );
}

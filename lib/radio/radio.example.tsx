import React, { useState } from 'react';
import { RadioGroup } from './radio-group';
import { Radio } from './radio';

export const RadioExample = () => {
  const [value, setValue] = useState('yes');
  return (
    <>
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio name="confirm" value="yes">Yes</Radio>
        <br />
        <Radio name="confirm" value="no">No</Radio>
      </RadioGroup>
    </>
  );
};

export default RadioExample;

import React, { useState, ChangeEventHandler } from 'react';
import { RadioGroup } from '../../lib/radio/radio-group';
import { Radio } from '../../lib/radio/radio';

export const RadioExample = () => {
  const [value, setValue] = useState('yes');
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <RadioGroup value={value} onChange={onChange}>
        <Radio name="confirm" value="yes">Yes</Radio>
        <br />
        <Radio name="confirm" value="no">No</Radio>
      </RadioGroup>
    </>
  );
};

export default RadioExample;

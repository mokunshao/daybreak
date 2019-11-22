import React, { useState } from 'react';
import { Checkbox } from './checkbox';

export const CheckboxExample: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <div>
      <Checkbox checked={checked1} change={(value) => setChecked1(value)} />
      <br />
      <Checkbox checked={checked2} change={(value) => setChecked2(value)} />
      <br />
      <Checkbox checked={checked3} change={(value) => setChecked3(value)}>Agree?</Checkbox>
    </div>
  );
};

export default CheckboxExample;

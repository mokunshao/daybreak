import React, { useState } from 'react';
import { Checkbox } from './checkbox';

export const CheckboxExample: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <div>
      <Checkbox checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
      <br />
      <Checkbox checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />
      <br />
      <Checkbox checked={checked3} onChange={(e) => setChecked3(e.target.checked)}>Agree?</Checkbox>
    </div>
  );
};

export default CheckboxExample;

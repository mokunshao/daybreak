import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../checkbox';

function Example() {
  const [checked1, setChecked1] = useState(true);
  return (
    <div>
      <Checkbox checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
    </div>
  );
}

describe('Tabs', () => {
  it('exits', () => {
    expect(Checkbox).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});

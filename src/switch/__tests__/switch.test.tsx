import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Switch } from '../switch';

function Example() {
  const [value, setValue] = useState(true);
  return (
    <div>
      <Switch checked={value} onChange={(e) => setValue(e.target.checked)} />
    </div>
  );
}

describe('Switch', () => {
  it('exits', () => {
    expect(Switch).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});

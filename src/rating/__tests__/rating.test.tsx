import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Rating } from '../rating';
import { Star } from '../star';
import Index from '../index';

function Example() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <Rating value={value} max={5} onChange={(val) => setValue(val)} />
    </div>
  );
}

describe('Rating', () => {
  it('exits', () => {
    expect(Rating).toBeTruthy();
    expect(Star).toBeTruthy();
    expect(Index).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});

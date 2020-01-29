import { render } from '@testing-library/react';
import React from 'react';
import { Input } from '../input';

describe('Input', () => {
  it('exit', () => {
    expect(Input).toBeTruthy();
    expect(<Input />).toBeTruthy();
  });
  it('match snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});

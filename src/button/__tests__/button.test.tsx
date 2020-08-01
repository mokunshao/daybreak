import { render } from '@testing-library/react';
import React from 'react';
import Button from '../button';

describe('button', () => {
  it('是个 button', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});

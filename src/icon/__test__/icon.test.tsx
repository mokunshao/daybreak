import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Icon from '../icon';

describe('Icon', () => {
  it('是个 svg', () => {
    const { asFragment } = render(<Icon name="qq" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('onClick', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Icon name="qq" onClick={fn} data-testid="qq" />);
    fireEvent.click(
      getByTestId('qq'),
    );
    expect(fn).toBeCalled();
  });
});

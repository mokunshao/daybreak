import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Pagination } from '../pagination';

function Example() {
  const [current, setCurrent] = useState(1);
  const onChange = (n: number) => setCurrent(n);
  return (
    <div>
      <Pagination pageSize={10} total={200} current={current} onChange={onChange} />
    </div>
  );
}


describe('Pagination', () => {
  it('exits', () => {
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('click', () => {
    const { getByText } = render(<Example />);
    const button = getByText('2');
    expect(button.classList.contains('daybreak-button-primary')).toBeFalsy();
    button.click();
    expect(button.classList.contains('daybreak-button-primary')).toBeTruthy();
    const button2 = getByText('4');
    button2.click();
    expect(button.classList.contains('daybreak-button-primary')).toBeFalsy();
    expect(button2.classList.contains('daybreak-button-primary')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '../table';

function Example() {
  const columns = ['name', 'age'];
  const data = [
    [
      'Jack',
      18,
    ],
    [
      'Amy',
      20,
    ],
    [
      'Mike',
      19,
    ],
    [
      'Lily',
      14,
    ],
  ];
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}


describe('Table', () => {
  it('exits', () => {
    expect(Table).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});

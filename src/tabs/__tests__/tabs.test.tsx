import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Tabs } from '../tabs';
import { TabPane } from '../tab-pane';

function Example() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Tabs isVertical active={active} onChange={(index) => setActive(index)}>
        <TabPane tab="1121">Tab 1 Content</TabPane>
        <TabPane tab="okok">Tab 2 Content</TabPane>
      </Tabs>
    </div>
  );
}


describe('Tabs', () => {
  it('exits', () => {
    expect(Tabs).toBeTruthy();
    expect(TabPane).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});

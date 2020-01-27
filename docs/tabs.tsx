import React, { useState } from 'react';
import { Tabs } from '../src/tabs/tabs';
import { TabPane } from '../src/tabs/tab-pane';

export default () => {
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState(0);
  return (
    <div>
      <Tabs active={active} onChange={(index) => setActive(index)}>
        <TabPane tab='1121999999'>Tab 1</TabPane>
        <TabPane tab="okokkk">Tab 2</TabPane>
      </Tabs>
      <br />
      <Tabs isVertical active={active1} onChange={(index) => setActive1(index)}>
        <TabPane tab='1121'>Tab 1</TabPane>
        <TabPane tab="okok">Tab 2</TabPane>
      </Tabs>
    </div>
  );
};
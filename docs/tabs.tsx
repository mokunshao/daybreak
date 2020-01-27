import React, { useState } from 'react';
import { Tabs } from '../src/tabs/tabs';
import { Tab } from '../src/tabs/tab';

export default () => {
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState(1);
  return (
    <div>
      <Tabs active={active} onChange={(index) => setActive(index)}>
        <Tab title='1121'>Tab 1</Tab>
        <Tab title="okok">Tab 2</Tab>
      </Tabs>
      <br />
      <Tabs isVertical active={active1} onChange={(index) => setActive1(index)}>
        <Tab title='1121'>Tab 1</Tab>
        <Tab title="okok">Tab 2</Tab>
      </Tabs>
    </div>
  );
};
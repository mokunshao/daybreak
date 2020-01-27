import React, { HTMLProps, ReactElement } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './tabs.scss';
import { Tab } from './tab';

export const baseClass = joinedClass('tabs');

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  active: number;
  onChange: (i: number) => void;
  isVertical?: boolean;
}

export const Tabs: React.FC<Props> = (props) => {
  const {
    children, className, active = 0,
    onChange, isVertical = false, ...rest
  } = props;

  const tabsList: Array<ReactElement> = [];

  React.Children.map(children, (c) => {
    if (React.isValidElement(c) && c.type === Tab) {
      tabsList.push(c);
    }
  });

  function renderTabsLabel() {
    return tabsList.map((c, i) => (
      <div className={baseClass('tab')} key={i} onClick={() => onChange(i)}>
        {c.props.title}
      </div>
    ));
  }

  function renderActiveTab() {
    return tabsList[active];
  }

  return (
    <div className={classes(baseClass(), isVertical && baseClass('vertical'), className)} {...rest}>
      <div className={baseClass('list')}>
        {renderTabsLabel()}
      </div>
      <div className={baseClass('panes')}>
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default Tabs;

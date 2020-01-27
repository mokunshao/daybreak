import React, {
  HTMLProps, ReactElement, useMemo, useRef,
} from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './tabs.scss';
import { TabPane } from './tab-pane';

export const baseClass = joinedClass('tabs');

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  active: number;
  onChange: (i: number) => void;
  isVertical?: boolean;
}

export const Tabs: React.FC<Props> = React.memo((props) => {
  const {
    children, className, active = 0,
    onChange, isVertical = false, ...rest
  } = props;

  const TheChildren = useRef(children);

  const tabsList: Array<ReactElement> = useMemo(() => {
    const arr: Array<ReactElement> = [];
    React.Children.forEach(TheChildren.current, (c) => {
      if (React.isValidElement(c) && c.type === TabPane) {
        arr.push(c);
      }
    });
    return arr;
  }, [TheChildren]);

  const tabsLabel = useMemo(
    () => tabsList.map((c, i) => (
      <div className={baseClass('tab')} key={i} onClick={() => onChange(i)}>
        {c.props.tab}
      </div>
    )),
    [onChange, tabsList],
  );

  const ActiveTab = useMemo(
    () => tabsList[active],
    [active, tabsList],
  );

  return (
    <div className={classes(baseClass(), isVertical && baseClass('vertical'), className)} {...rest}>
      <div className={baseClass('list')}>
        {tabsLabel}
      </div>
      <div className={baseClass('panes')}>
        {ActiveTab}
      </div>
    </div>
  );
});

export default Tabs;

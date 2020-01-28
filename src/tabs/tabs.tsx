import React, {
  HTMLProps, ReactElement, useMemo, useRef, useCallback, useEffect, RefObject,
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

  const tabsList = useMemo(() => {
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
      <div ref={React.createRef()} className={baseClass('tab')} key={i} onClick={() => onChange(i)}>
        {c.props.tab}
      </div>
    )),
    [onChange, tabsList],
  );

  const lineRef = useRef(null);

  useEffect(() => {
    const { current } = lineRef as RefObject<HTMLElement>;
    if (current) {
      const { ref } = tabsLabel[active] as any;
      const rect = ref.current.getBoundingClientRect();
      if (!isVertical) {
        current.style.top = `${rect.height}px`;
        current.style.width = `${rect.width}px`;
        current.style.left = `${ref.current.offsetLeft}px`;
      }
    }
  }, [active, isVertical, tabsLabel]);

  const ActiveTab = useMemo(
    () => tabsList[active],
    [active, tabsList],
  );

  return (
    <div className={classes(baseClass(), isVertical && baseClass('vertical'), className)} {...rest}>
      <div className={baseClass('list')} style={{ position: 'relative' }}>
        {tabsLabel}
      </div>
      <div ref={lineRef} className={baseClass('line')} />
      <div className={baseClass('panes')}>
        {ActiveTab}
      </div>
    </div>
  );
});

export default Tabs;

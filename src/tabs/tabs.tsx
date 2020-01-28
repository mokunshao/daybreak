/* eslint-disable jsx-a11y/mouse-events-have-key-events */
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

  const lineRef = useRef(null);

  const setLinePosition = useCallback((lineRef1, target) => {
    const { current } = lineRef1 as RefObject<HTMLElement>;
    if (!current) { return; }
    const lineWidth = 2;
    const rect = target.getBoundingClientRect();
    if (!isVertical) {
      current.style.top = `${rect.height - lineWidth}px`;
      current.style.width = `${rect.width}px`;
      current.style.left = `${target.offsetLeft}px`;
      current.style.height = `${lineWidth}px`;
    } else {
      current.style.left = `${rect.width - lineWidth}px`;
      current.style.height = `${rect.height}px`;
      current.style.width = `${lineWidth}px`;
      current.style.top = `${target.offsetTop}px`;
    }
  }, [isVertical]);

  const mouseOver = useCallback((e) => {
    setLinePosition(lineRef, e.target);
  }, [setLinePosition]);

  const tabsLabel: Array<ReactElement> = useMemo(
    () => {
      const mouseLeave = () => {
        const { ref } = tabsLabel[active] as any;
        setLinePosition(lineRef, ref.current);
      };
      return tabsList.map((c, i) => (
        <div ref={React.createRef()} className={baseClass('tab')} key={i} onClick={() => onChange(i)} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
          {c.props.tab}
        </div>
      ));
    },
    [active, mouseOver, onChange, tabsList, setLinePosition],
  );

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      const { ref } = tabsLabel[active] as any;
      setLinePosition(lineRef, ref.current);
      isMounted.current = false;
    }
  }, [active, tabsLabel, setLinePosition]);

  const ActiveTab = useMemo(
    () => tabsList[active],
    [active, tabsList],
  );

  return (
    <div className={classes(baseClass(), isVertical && baseClass('vertical'), className)} {...rest}>
      <div className={baseClass('list')}>
        {tabsLabel}
        <div ref={lineRef} className={baseClass('line')} />
      </div>
      <div className={baseClass('panes')}>
        {ActiveTab}
      </div>
    </div>
  );
});

export default Tabs;

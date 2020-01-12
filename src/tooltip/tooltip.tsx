import React, {
  HTMLProps, ReactNode, useState, useRef, useContext, useCallback, useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import './tooltip.scss';

const baseClass = joinedClass('tooltip');

const PositionContext = React.createContext<DOMRect | null>(null);

interface Props extends HTMLProps<HTMLDivElement> {
  render: ReactNode;
}

const ToolipItem: React.FC = React.memo((props) => {
  const { children } = props;

  const position = useContext(PositionContext);
  if (!position) return null;
  const { top, left, width } = position;

  const style = useMemo(() => ({
    bottom: `${window.innerHeight - top + 8 - window.scrollY}px`,
    left: `${left + width / 2 + window.scrollX}px`,
  }), [left, top, width]);

  return ReactDOM.createPortal(
    <div
      className={baseClass('item')}
      style={style}
    >
      <div className={baseClass('item', 'triangle')} />
      {children}
    </div>,
    document.body,
  );
});


const Tooltip: React.FC<Props> = React.memo((props) => {
  const {
    children, className, render, ...rest
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const element = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<DOMRect | null>(null);

  const getPosition = useCallback(() => {
    if (!element.current) return;
    const rect = element.current.getBoundingClientRect();
    setPosition(rect);
  }, []);

  const showTooltip = useCallback(() => {
    setTooltipVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltipVisible(false);
  }, []);

  const focus = useCallback(() => {
    getPosition();
    showTooltip();
  }, [getPosition, showTooltip]);

  return (
    <PositionContext.Provider value={position}>
      <div
        ref={element}
        className={classes(baseClass(), className)}
        onMouseEnter={getPosition}
        onMouseOver={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={focus}
        onBlur={hideTooltip}
        tabIndex={0}
        role="textbox"
        {...rest}
      >
        {children}
      </div>
      {tooltipVisible && <ToolipItem>{render}</ToolipItem>}
    </PositionContext.Provider>
  );
});

export default Tooltip;

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
  const { innerHeight, scrollY, scrollX } = window;

  const style = useMemo(() => ({
    bottom: `${innerHeight - top + 8 - scrollY}px`,
    left: `${left + width / 2 + scrollX}px`,
  }), [innerHeight, left, scrollX, scrollY, top, width]);

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
    getPosition();
    setTooltipVisible(true);
  }, [getPosition]);

  const hideTooltip = useCallback(() => {
    setTooltipVisible(false);
  }, []);

  return (
    <PositionContext.Provider value={position}>
      <div
        ref={element}
        className={classes(baseClass(), className)}
        onMouseOver={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
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

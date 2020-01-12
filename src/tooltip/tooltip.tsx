import React, {
  HTMLProps, ReactNode, useState, useRef, useContext,
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

const ToolipItem: React.FC = (props) => {
  const { children } = props;
  const position = useContext(PositionContext);
  if (!position) return null;
  const { top, left, width } = position;
  const style = {
    bottom: `${window.innerHeight - top + 8 - window.scrollY}px`,
    left: `${left + width / 2 + window.scrollX}px`,
  };
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
};


const Tooltip: React.FC<Props> = (props) => {
  const {
    children, className, render, ...rest
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const element = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<DOMRect | null>(null);
  function getPosition() {
    if (!element.current) return;
    const rect = element.current.getBoundingClientRect();
    setPosition(rect);
  }

  function showTooltip() {
    setTooltipVisible(true);
  }

  function hideTooltip() {
    setTooltipVisible(false);
  }

  function focus() {
    getPosition();
    showTooltip();
  }

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
};

export default Tooltip;

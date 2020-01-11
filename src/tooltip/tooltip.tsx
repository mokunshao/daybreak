/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, {
  HTMLProps, ReactNode, useState, useRef, useContext,
} from 'react';
import ReactDOM from 'react-dom';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import './tooltip.scss';

const baseClass = joinedClass('tooltip');

// const PositionContext = React.createContext({ position: new DOMRectReadOnly() });

const PositionContext = React.createContext({ position: { left: 0, top: 0, width: 0 } });

interface Props extends HTMLProps<HTMLDivElement> {
  render: ReactNode;
}

const ToolipItem: React.FC = (props) => {
  const { children } = props;
  const context = useContext(PositionContext);
  const { top, left, width } = context.position;
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
  const context = useContext(PositionContext);

  function getPosition() {
    if (!element.current) return;
    const rect = element.current.getBoundingClientRect();
    context.position = rect;
  }

  function showTooltip() {
    // getPosition();
    setTooltipVisible(true);
  }

  function hideTooltip() {
    setTooltipVisible(false);
  }

  return (
    <>
      <div
        ref={element}
        className={classes(baseClass(), className)}
        onMouseEnter={getPosition}
        onMouseOver={showTooltip}
        onMouseLeave={hideTooltip}
        {...rest}
      >
        {children}
      </div>
      {tooltipVisible && <ToolipItem>{render}</ToolipItem>}
    </>
  );
};

export default Tooltip;

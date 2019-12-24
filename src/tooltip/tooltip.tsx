import React, {
  HTMLProps, ReactNode, useState, useRef, useContext,
} from 'react';
import ReactDOM from 'react-dom';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import './tooltip.scss';

const baseClass = joinedClass('tooltip');

const PositionContext = React.createContext({ positon: new DOMRect() });

interface Props extends HTMLProps<HTMLDivElement>{
  render: ReactNode;
}

const ToolipItem: React.FC<{ render: ReactNode }> = (props) => {
  const { render } = props;
  const context = useContext(PositionContext);
  const { top, left, width } = context.positon;
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
      {render}
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
    context.positon = rect;
  }

  function showTooltip() {
    getPosition();
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
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...rest}
      >
        {children}
      </div>
      {tooltipVisible && <ToolipItem render={render} />}
    </>
  );
};

export default Tooltip;

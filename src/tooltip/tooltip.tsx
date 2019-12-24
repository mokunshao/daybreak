import React, { HTMLProps, ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import './tooltip.scss';

const baseClass = joinedClass('tooltip');

interface Props extends HTMLProps<HTMLDivElement>{
  render?: ReactNode;
}

function ToolipItem() {
  return ReactDOM.createPortal(<div className={baseClass('item')}>ToolipItem</div>, document.body);
}


const Tooltip: React.FC<Props> = (props) => {
  const {
    children, className, render, ...rest
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);

  function showTooltip() {
    setTooltipVisible(true);
  }

  function hideTooltip() {
    setTooltipVisible(false);
  }

  return (
    <>
      <div
        className={classes(baseClass(), className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...rest}
      >
        {children}
      </div>
      {tooltipVisible && <ToolipItem />}
    </>
  );
};

export default Tooltip;

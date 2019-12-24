import React, { HTMLProps, ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';

const baseClass = joinedClass('tooltip');

// interface Props extends HTMLProps<HTMLElement>{
//   render?: ReactNode;
// }
interface Props extends HTMLProps<HTMLElement>{
  render?: ReactNode;
}

function ToolipItem() {
  return ReactDOM.createPortal(<div>ToolipItem</div>, document.body);
}


const Tooltip: React.FC<Props> = (props) => {
  const {
    children, className, render, ...rest
  } = props;

  const [tooltipVisible, setTooltipVisible] = useState(false);

  function showTooltip() {
    setTooltipVisible(true);
  }

  return (
    <>
      <span className={classes(baseClass(), className)} onClick={showTooltip} {...rest}>
        {children}
      </span>
      {tooltipVisible && <ToolipItem />}
    </>
  );
};

export default Tooltip;

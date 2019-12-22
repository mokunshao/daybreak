import React, { useState, HTMLAttributes } from 'react';
import { baseClass } from './rating';

interface StarProps extends HTMLAttributes<HTMLElement> {
  index: number;
}

const Star: React.FC<StarProps> = (props) => {
  function click() {
    console.log('click');
  }
  function mouseEnter() {
    console.log('mouseEnter');
  }
  function mouseLeave() {
    console.log('mouseLeave');
  }

  return (
    <span
      className={baseClass('star')}
      onClick={click}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      ★
    </span>
  );
};

export default Star;

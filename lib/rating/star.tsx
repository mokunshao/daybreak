import React, { useCallback, useState } from 'react';
import { baseClass } from './rating';
import classes from '../utils/classes';

interface StarProps{
  lighten: boolean;
  index: number;
  setOverride: (value: number|null) => void;
  setRating: (value: number) => void;
}

const Star: React.FC<StarProps> = (props) => {
  const {
    index, lighten, setOverride, setRating,
  } = props;

  const [down, setDown] = useState<boolean>(false);

  const mouseDown = useCallback(() => {
    setDown(true);
  }, []);

  const mouseUp = useCallback(() => {
    setDown(false);
  }, []);

  const click = useCallback(() => {
    setRating(index);
  }, [index, setRating]);

  const mouseEnter = useCallback(() => {
    setOverride(index);
  }, [index, setOverride]);

  const mouseLeave = useCallback(() => {
    setOverride(null);
  }, [setOverride]);

  return (
    <span
      className={
        classes(
          baseClass('star'),
          lighten ? baseClass('star', 'lighten') : '',
        )
      }
      style={{
        transform: `scale(${down ? 0.9 : 1})`,
      }}
      onClick={click}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
    >
      ★
    </span>
  );
};

export default Star;

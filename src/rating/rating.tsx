import React, { useState, HTMLProps, useMemo } from 'react';
import './rating.scss';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import Star from './star';

export const baseClass = joinedClass('rating');

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  max?: number;
  value: number;
  onChange: (value: number) => void;
  clearable?: boolean;
}

export const Rating: React.FC<Props> = React.memo((props) => {
  const {
    className, max = 5, value, onChange, clearable = false, ...rest
  } = props;

  const [override, setOverride] = useState(0);

  const stars = useMemo(() => {
    const array = [];
    for (let index = 1; index <= max; index += 1) {
      array.push(<Star
        lighten={index <= (override || value)}
        index={index}
        key={index}
        rating={value}
        setOverride={setOverride}
        setRating={onChange}
        clearable={clearable}
      />);
    }
    return array;
  }, [clearable, max, onChange, override, value]);

  return (
    <div className={classes(baseClass(), className)} {...rest}>
      {stars}
    </div>
  );
});

export default Rating;

import React, { useState } from 'react';
import './rating.scss';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import Star from './star';

export const baseClass = joinedClass('rating');

interface Props{
  className?: string;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  clearable?: boolean;
}

const Rating: React.FC<Props> = (props) => {
  const {
    className, max = 5, value, onChange, clearable = false, ...rest
  } = props;

  const [override, setOverride] = useState(0);

  const stars = [];

  for (let index = 1; index <= max; index += 1) {
    stars.push(<Star
      lighten={index <= (override || value)}
      index={index}
      key={index}
      rating={value}
      setOverride={setOverride}
      setRating={onChange}
      clearable={clearable}
    />);
  }


  return (
    <div className={classes(baseClass(), className)} {...rest}>
      {stars}
    </div>
  );
};

export default Rating;

import React, { HtmlHTMLAttributes, HTMLAttributes } from 'react';
import './rating.scss';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import Star from './star';

export const baseClass = joinedClass('rating');

interface Props extends HTMLAttributes<HTMLElement>{
  max: number;
  value: number;
}

const Rating: React.FC<Props> = (props) => {
  const {
    className, max, ...rest
  } = props;

  const stars = [];

  for (let index = 0; index < max; index += 1) {
    stars.push(<Star index={index} key={index} />);
  }

  return (
    <div className={classes(baseClass(), className)} {...rest}>
      {stars}
    </div>
  );
};

export default Rating;

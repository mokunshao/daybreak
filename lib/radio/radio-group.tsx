import React, { HtmlHTMLAttributes } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './radio.scss';

const baseClass = joinedClass('radio-group');

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: React.FC<Props> = (props) => {
  const { children, className } = props;
  return <div className={classes(baseClass(), className)}>{children}</div>;
};

export default RadioGroup;

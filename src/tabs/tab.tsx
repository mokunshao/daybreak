import React, { HTMLProps } from 'react';
import { classes } from '../utils/classes';
import { baseClass } from './tabs';

interface Props extends HTMLProps<HTMLDivElement> {
  title: string;
}

export const Tab: React.FC<Props> = (props) => {
  const {
    children, className, ...rest
  } = props;
  return (
    <div className={classes(baseClass('pane'), className)} {...rest}>
      {children}
    </div>
  );
};

export default Tab;

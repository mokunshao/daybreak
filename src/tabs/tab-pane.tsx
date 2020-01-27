import React, { HTMLProps, ReactNode } from 'react';
import { classes } from '../utils/classes';
import { baseClass } from './tabs';

interface Props extends HTMLProps<HTMLDivElement> {
  tab: ReactNode;
}

export const TabPane: React.FC<Props> = (props) => {
  const {
    children, className, ...rest
  } = props;
  return (
    <div className={classes(baseClass('pane'), className)} {...rest}>
      {children}
    </div>
  );
};

export default TabPane;

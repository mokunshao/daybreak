import React, { HTMLProps } from 'react';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import './pagination.scss';
import { Button } from '../button/button';
import Icon from '../icon/icon';

const baseClass = joinedClass('pagination');

interface Props extends HTMLProps<HTMLDivElement> {
  xxx?: any;
}

const Pagination: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={classes(baseClass(), className)}>
      <Button className={baseClass('button')} type="button"><Icon name="left" /></Button>
      <Button className={baseClass('button')} type="button">1</Button>
      <Button className={baseClass('button')} type="button" mode="primary">2</Button>
      <Button className={baseClass('button')} type="button">3</Button>
      <Button className={baseClass('button')} type="button"><Icon name="right" /></Button>
    </div>
  );
};

export default Pagination;

export { Pagination };

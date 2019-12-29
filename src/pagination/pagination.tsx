import React, {
  HTMLProps, useMemo, MouseEventHandler, useState,
} from 'react';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import './pagination.scss';
import { Button } from '../button/button';
import Icon from '../icon/icon';

const baseClass = joinedClass('pagination');

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  current: number;
  pageSize: number;
  total: number;
  onChange: Function;
  disabled?: boolean;
}

const Pagination: React.FC<Props> = (props) => {
  const {
    className, total, pageSize, current, onChange,
  } = props;
  const pagesCount = useMemo(() => total / pageSize, [total, pageSize]);
  const arr = [];
  for (let index = 0; index < pagesCount; index += 1) {
    arr.push(index);
  }

  const handleClick = (n: number) => {
    onChange(n);
  };
  return (
    <div className={classes(baseClass(), className)}>
      <Button
        className={baseClass('button')}
        type="button"
        onClick={() => handleClick(current - 1)}
      >
        <Icon name="left" />
      </Button>
      {arr.map((item) => (
        <Button
          className={baseClass('button')}
          type="button"
          key={item}
          mode={current === item ? 'primary' : 'normal'}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      ))}
      <Button className={baseClass('button')} type="button">
        <Icon
          name="right"
          onClick={() => handleClick(current + 1)}
        />
      </Button>
    </div>
  );
};

export default Pagination;

export { Pagination };

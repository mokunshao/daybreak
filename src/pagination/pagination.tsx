import React, {
  HTMLProps, useMemo, useCallback,
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
  onChange: (n: number) => void;
  disabled?: boolean;
}

const Pagination: React.FC<Props> = (props) => {
  const {
    className, total, pageSize, current, onChange,
  } = props;

  const pagesCount = useMemo(() => total / pageSize, [total, pageSize]);

  const arr = useMemo(() => {
    const array = [];
    for (let index = 0; index < pagesCount; index += 1) {
      array.push(index + 1);
    }
    return array;
  }, [pagesCount]);

  const handleClick = useCallback((n: number) => {
    if (n < 1) return;
    if (n > arr.length) return;
    onChange(n);
  }, [arr.length, onChange]);

  const renderButton = useCallback(() => arr.map((item) => (
    <Button
      className={baseClass('button')}
      type="button"
      key={item}
      mode={current === item ? 'primary' : 'normal'}
      onClick={() => handleClick(item)}
    >
      {item}
    </Button>
  )), [arr, current, handleClick]);

  return (
    <div className={classes(baseClass(), className)}>
      <Button
        disabled={current === 1}
        className={baseClass('button')}
        type="button"
        onClick={() => handleClick(current - 1)}
      >
        <Icon name="left" />
      </Button>
      {renderButton()}
      <Button
        disabled={current === arr.length}
        className={baseClass('button')}
        type="button"
        onClick={() => handleClick(current + 1)}
      >
        <Icon
          name="right"
        />
      </Button>
    </div>
  );
};

export default Pagination;

export { Pagination };

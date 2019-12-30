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

  const array: number[] = useMemo(() => {
    const arr = [];
    for (let index = 0; index < pagesCount; index += 1) {
      arr.push(index + 1);
    }
    return arr;
  }, [pagesCount]);

  const list: Array<number | string> = useMemo(() => {
    if (pagesCount > 10) {
      if (current < 5) {
        return [...array.slice(0, 5), '...', pagesCount];
      }

      if (current < pagesCount - 3) {
        return [1, '...', ...array.slice(current - 2, current + 1), '...', pagesCount];
      }

      return [1, '...', ...array.slice(pagesCount - 5, pagesCount)];
    }

    return array;
  }, [current, pagesCount, array]);

  const handleClick = useCallback((n: number) => {
    if (n < 0 || n > pagesCount) return;
    onChange(n);
  }, [onChange, pagesCount]);

  const renderButton = useCallback(() => {
    let ellipsesCount = 0;
    return list.map((item) => {
      if (typeof item === 'string') {
        const i = ellipsesCount;
        ellipsesCount += 1;
        return (
          <Button
            className={baseClass('button')}
            key={`${item}${i}`}
          >
            {item}
          </Button>
        );
      }

      return (
        <Button
          className={baseClass('button')}
          key={item}
          mode={current === item ? 'primary' : 'normal'}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      );
    });
  }, [current, handleClick, list]);

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
        disabled={current === pagesCount}
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

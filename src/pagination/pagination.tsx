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

  const arr: Array<any> = useMemo(() => {
    const array = [];
    for (let index = 0; index < pagesCount; index += 1) {
      array.push(index + 1);
    }

    if (pagesCount > 10) {
      if (current < 5) {
        return [...array.slice(0, 5), '...', pagesCount];
      }
      if (current <= pagesCount - 4) {
        return [1, '...', ...array.slice(current - 2, current + 1), '...', pagesCount];
      }

      return [1, '...', ...array.slice(pagesCount - 5, pagesCount)];
    }

    return array;
  }, [current, pagesCount]);

  const handleClick = useCallback((n: number) => {
    onChange(n);
  }, [onChange]);

  const renderButton = useCallback(() => {
    let dotCount = 0;
    return arr.map((item) => {
      if (item === '...') {
        const n = dotCount;
        dotCount += 1;
        return (
          <Button
            key={`${item}${n}`}
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
  }, [arr, current, handleClick]);

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

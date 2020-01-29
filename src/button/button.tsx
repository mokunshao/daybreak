import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './button.scss';
import Icon from '../icon/icon';

const baseClass = joinedClass('button');

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'normal' | 'primary' | 'danger';
  loading?: boolean;
  outlined?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {
    mode = 'normal',
    type = 'button',
    className,
    children,
    onClick,
    loading = false,
    outlined = false,
    ...rest
  } = props;

  const onClick2: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.blur();
    onClick && onClick(e);
  };

  const loadingIcon = <Icon name="loading" className={baseClass('loading-icon')} />;

  return (
    <button
      type={type}
      onClick={onClick2}
      className={classes(baseClass(), baseClass(mode), outlined ? baseClass('outlined') : '', className)}
      {...rest}
    >
      {loading ? (
        <>
          {loadingIcon}
          <span style={{ opacity: 0 }}>
            {children}
          </span>
        </>
      ) : children}
    </button>
  );
};

export default Button;

export { Button };

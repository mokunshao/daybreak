import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { joinedClass } from '../utils/joinedClass';
import './button.scss';
import Icon from '../icon/icon';

const baseClass = joinedClass('button');

export enum ButtonMode {
  primary = 'primary',
  normal = 'normal',
  danger = 'danger',
  link = 'link',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode;
  loading?: boolean;
  outlined?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {
    mode = ButtonMode.normal,
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

  const loadingIcon = (
    <Icon name="loading" className={baseClass('loading-icon')} />
  );

  const renderLoadingChildren = () => (
    <>
      {loadingIcon}
      <span style={{ opacity: 0 }}>{children}</span>
    </>
  );

  return (
    <button
      type={type}
      onClick={onClick2}
      className={classNames(
        baseClass(),
        baseClass(mode),
        { [baseClass('outlined')]: outlined },
        className,
      )}
      {...rest}
    >
      {loading ? renderLoadingChildren() : children}
    </button>
  );
};

export default Button;

export { Button };

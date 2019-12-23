import React, { useRef, useEffect, useState } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './input.scss';
import Icon from '../icon/icon';

const baseClass = joinedClass('input');

export interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  clearable?: boolean;
  onClear?: Function;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const {
    className, clearable, onClear, type, ...rest
  } = props;

  const [type2, setType2] = useState('text');

  useEffect(() => {
    if (type) setType2(type);
  }, [type]);

  function clear() {
    const { current } = inputElement;
    if (!current) return;
    current.value = '';
    if (onClear) onClear();
    current.focus();
  }

  function showClearIcon() {
    if (!clearable) return null;
    const { current } = inputElement;
    if (!current) return null;
    if (!current.value) return null;
    return (
      <span title="clear value" className={baseClass('icon')}>
        <Icon name="clear" className={baseClass('icon', 'clear')} onClick={clear} />
      </span>
    );
  }

  function showPassword() {
    setType2('text');
  }

  function hidePassword() {
    setType2('password');
  }

  function showPasswordIcon() {
    if (type !== 'password') return null;
    if (type2 === 'password') {
      return (
        <span title="show password" className={baseClass('icon')}>
          <Icon name="show" className={baseClass('icon', 'password')} onClick={showPassword} />
        </span>
      );
    }
    return (
      <span title="hide password" className={baseClass('icon')}>
        <Icon name="hide" className={baseClass('icon', 'password')} onClick={hidePassword} />
      </span>
    );
  }

  return (
    <div className={baseClass('wrapper')}>
      <input
        ref={inputElement}
        className={classes(baseClass(), className)}
        type={type2}
        {...rest}
      />
      <div className={baseClass('icons')}>
        {showPasswordIcon()}
        {showClearIcon()}
      </div>
    </div>
  );
};


export default Input;

export { Input };

import React, { useRef } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './input.scss';
import Icon from '../icon/icon';

const baseClass = joinedClass('input');

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  clearable?: boolean;
  onClear?: Function;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const {
    className, clearable, onClear, ...rest
  } = props;

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
      <span title="clear value">
        <Icon name="clear" className={baseClass('clear')} onClick={clear} />
      </span>
    );
  }

  return (
    <div className={baseClass('wrapper')}>
      <input ref={inputElement} className={classes(baseClass(), className)} {...rest} />
      {showClearIcon()}
    </div>
  );
};


export default Input;

export { Input };

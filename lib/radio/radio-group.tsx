import React, { HtmlHTMLAttributes, ChangeEventHandler } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './radio.scss';

export const Context = React.createContext({ val: 1212, e: undefined });

const baseClass = joinedClass('radio-group');

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const RadioGroup: React.FC<Props> = (props) => {
  const {
    children, className, onChange, value,
  } = props;
  return (
    <div className={classes(baseClass(), className)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) { return null; }
        return React.cloneElement(child, { onChange, checked: value === child.props.value });
      })}
    </div>
  );
};

export default RadioGroup;

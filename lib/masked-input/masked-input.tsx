import React from 'react';
import Input from '../input/input';
import { joinedClass } from '../utils/joinedClass';

const baseClass = joinedClass('masked', 'input');

type Props = React.HTMLProps<HTMLInputElement> & {
  mask: string;
  value: string;
  onChange: (value: string) => void;
};

const format = (val: string, template: string): string => {
  let i = 0;
  let lastReplaceIndex = -1;
  const filledMask = template.replace(/#/g, (_, j) => {
    if (i >= val.length) {
      return '#';
    }
    lastReplaceIndex = j;
    const result = val[i];
    i += 1;
    return result;
  });
  return filledMask.substring(0, lastReplaceIndex + 1);
};

const MaskedInput: React.FC<Props> = (props) => {
  const {
    value, mask, onChange, ...rest
  } = props;
  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const { value: originalValue } = e.currentTarget;
    const cleanValue = originalValue.replace(/[\D]/g, '');
    onChange(cleanValue);
  }
  return (
    <div className={baseClass()}>
      <Input
        placeholder={mask}
        value={value}
        onChange={change}
        {...rest}
      />
    </div>
  );
};

export { MaskedInput, format };

export default MaskedInput;

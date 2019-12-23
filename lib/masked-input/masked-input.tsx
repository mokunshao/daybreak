import React from 'react';
import Input, { Props as InputProps } from '../input/input';

interface Props extends Omit<InputProps, 'onChange' > {
  mask: string;
  value: string;
  onChange: (value: string) => void;
}

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
    <Input
      placeholder={mask}
      value={format(value, mask)}
      onChange={change}
      {...rest}
    />
  );
};

export { MaskedInput, format };

export default MaskedInput;

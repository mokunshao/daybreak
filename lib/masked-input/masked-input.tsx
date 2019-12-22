import React from 'react';
import Input from '../input/input';
import { joinedClass } from '../utils/joinedClass';

const baseClass = joinedClass('masked', 'input');

type Props = React.HTMLProps<HTMLInputElement> & {
  mask: string;
  value: string;
  onChange: (value: string) => void;
};

const MaskedInput: React.FC<Props> = (props) => {
  const {
    value, mask, onChange, ...rest
  } = props;
  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const { value: originalValue } = e.currentTarget;
    const cleanValue = originalValue.replace(/[^\d]/g, '');
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

export default MaskedInput;

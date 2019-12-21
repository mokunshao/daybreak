import React from 'react';
import './input.scss';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean;
    onClear?: Function;
}
declare const Input: React.FunctionComponent<Props>;
export default Input;
export { Input };
//# sourceMappingURL=input.d.ts.map
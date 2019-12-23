import React, { InputHTMLAttributes } from 'react';
import './checkbox.scss';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: React.FC<Props>;
export default Checkbox;
//# sourceMappingURL=checkbox.d.ts.map
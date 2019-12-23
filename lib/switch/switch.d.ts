import React, { InputHTMLAttributes, ChangeEventHandler } from 'react';
import './switch.scss';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export declare const Switch: React.FC<Props>;
export default Switch;
//# sourceMappingURL=switch.d.ts.map
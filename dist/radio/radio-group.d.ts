import React, { HtmlHTMLAttributes, ChangeEventHandler } from 'react';
import './radio.scss';
export declare const Context: React.Context<{
    val: number;
    e: undefined;
}>;
interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export declare const RadioGroup: React.FC<Props>;
export default RadioGroup;
//# sourceMappingURL=radio-group.d.ts.map
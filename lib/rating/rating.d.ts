import React, { HTMLProps } from 'react';
import './rating.scss';
export declare const baseClass: (...names: (string | undefined)[]) => string;
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    max?: number;
    value: number;
    onChange: (value: number) => void;
    clearable?: boolean;
}
export declare const Rating: React.FC<Props>;
export default Rating;
//# sourceMappingURL=rating.d.ts.map
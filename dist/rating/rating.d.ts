import React from 'react';
import './rating.scss';
export declare const baseClass: (...names: (string | undefined)[]) => string;
interface Props {
    className?: string;
    max?: number;
    value: number;
    onChange: (value: number) => void;
    clearable?: boolean;
}
declare const Rating: React.FC<Props>;
export default Rating;
//# sourceMappingURL=rating.d.ts.map
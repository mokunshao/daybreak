import React, { HTMLProps } from 'react';
import './tabs.scss';
export declare const baseClass: (...names: (string | undefined)[]) => string;
interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    active: number;
    onChange: (i: number) => void;
    isVertical?: boolean;
}
export declare const Tabs: React.FC<Props>;
export default Tabs;
//# sourceMappingURL=tabs.d.ts.map
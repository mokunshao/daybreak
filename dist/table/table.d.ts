import React, { TableHTMLAttributes, ReactNode } from 'react';
import './table.scss';
interface Props extends TableHTMLAttributes<HTMLTableElement> {
    columns: Array<string>;
    data: Array<Array<ReactNode>>;
}
export declare const Table: React.FC<Props>;
export default Table;
//# sourceMappingURL=table.d.ts.map
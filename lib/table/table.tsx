import React, { TableHTMLAttributes, ReactNode } from 'react';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './table.scss';

const table = joinedClass('table');

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  columns: Array<string>;
  data: Array<Array<ReactNode>>;
}

export const Table: React.FC<Props> = (props) => {
  const {
    data, columns, className, ...rest
  } = props;
  return (
    <table className={classes(table(), className)} {...rest}>
      <thead className={table('thead')}>
        <tr>
          {columns.map((item) => <th className={table('th')} key={item}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((item, index2) => <td className={table('td')} key={index2}>{item}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

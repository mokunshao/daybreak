import React, { useState } from 'react';
import { Pagination } from '../../src/pagination';

export default function () {
  const [current, setCurrent] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const onChange = (n: number) => setCurrent(n);
  const onChange2 = (n: number) => setCurrent2(n);
  return (
    <div>
      <Pagination pageSize={10} total={200} current={current} onChange={onChange} />
      <br />
      <br />
      <Pagination pageSize={10} total={40} current={current2} onChange={onChange2} />
    </div>
  );
}

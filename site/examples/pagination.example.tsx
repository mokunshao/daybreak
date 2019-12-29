import React, { useState } from 'react';
import { Pagination } from '../../src/pagination';

export default function () {
  const [current, setCurrent] = useState(0);
  const onChange = (n) => setCurrent(n);
  return (
    <div>
      <Pagination pageSize={10} total={100} current={current} onChange={onChange} />
    </div>
  );
}

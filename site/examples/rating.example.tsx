import React, { useState } from 'react';
import Rating from '../../lib/rating/rating';

export default function () {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(3);
  return (
    <div>
      <h1>Rating</h1>
      <Rating value={value} max={5} onChange={(val) => setValue(val)} />
      <br />
      <br />
      <Rating clearable value={value2} max={6} onChange={(val) => setValue2(val)} />
    </div>
  );
}

import React, { useState } from 'react';
import Rating from '../../lib/rating/rating';

export default function () {
  const [value, setValue] = useState(1);
  return <div><Rating value={value} max={5} /></div>;
}

import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setX(!x)}>set</button>
      <Dialog visible={x} />
    </div>
  );
};

export default DialogExample;

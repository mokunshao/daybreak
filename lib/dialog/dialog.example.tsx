import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setX(!x)}>set</button>
      <Dialog
        visible={x}
        buttons={
          [
            <button type="button" onClick={() => setX(false)}>Yes</button>,
            <button type="button" onClick={() => setX(false)}>No</button>,
          ]
        }
        onClose={() => setX(false)}
      >
        hello
      </Dialog>
    </div>
  );
};

export default DialogExample;

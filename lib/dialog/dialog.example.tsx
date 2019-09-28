import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <>
      <div>
        <h2>example 1</h2>
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
      <div>
        <h2>example 2</h2>
        <button type="button" onClick={() => setY(!y)}>set</button>
        <Dialog
          visible={y}
          buttons={
            [
              <button type="button" onClick={() => setY(false)}>Yes</button>,
              <button type="button" onClick={() => setY(false)}>No</button>,
            ]
          }
          onClose={() => setY(false)}
          closeOnClickMask={false}
        >
          hello
        </Dialog>
      </div>
    </>
  );
};

export default DialogExample;

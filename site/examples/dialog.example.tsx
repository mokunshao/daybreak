import React, { useState } from 'react';
import {
  Dialog,
  Alert,
  Confirm,
  Modal,
} from '../../lib/dialog/dialog';
import { Button } from '../../lib/button/button';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModel = () => {
    const close = Modal(
      (
        <>
          <h1>你好</h1>
          <Button type="button" onClick={() => close()}>Close</Button>
        </>
      ),
    );
  };
  return (
    <>
      <div>
        <h2>example 1</h2>
        <Button type="button" onClick={() => setX(!x)}>Open</Button>
        <Dialog
          visible={x}
          buttons={
            [
              <Button type="button" onClick={() => setX(false)}>Yes</Button>,
              <Button type="button" onClick={() => setX(false)}>No</Button>,
            ]
          }
          onClose={() => setX(false)}
        >
          hello
        </Dialog>
      </div>
      <div>
        <h2>example 2</h2>
        <Button type="button" onClick={() => setY(!y)}>Open</Button>
        <Dialog
          visible={y}
          buttons={
            [
              <Button type="button" onClick={() => setY(false)}>Yes</Button>,
              <Button type="button" onClick={() => setY(false)}>No</Button>,
            ]
          }
          onClose={() => setY(false)}
          closeOnClickMask={false}
        >
          hello
        </Dialog>
      </div>
      <div>
        <h2>example 3</h2>
        <Button type="button" onClick={() => Alert('hello')}>Open</Button>
      </div>
      <div>
        <h2>example 4</h2>
        <Button type="button" onClick={() => Confirm('hello')}>Open</Button>
      </div>
      <div>
        <h2>example 5</h2>
        <Button type="button" onClick={openModel}>Open</Button>
      </div>
    </>
  );
};

export default DialogExample;

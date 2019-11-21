import React, { useState } from 'react';
import { Button } from './lib/button/button';

interface Props {
  code: string;
}
const style = { background: '#eee', padding: '1em', display: 'inline-block' };
const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const { code, children } = props;
  const codePreview = <pre style={style}><code>{code}</code></pre>;
  return (
    <>
      <div>
        {children}
      </div>
      <div>
        <Button style={{ margin: '0.5em 0' }} type="button" onClick={() => setCodeVisible(!codeVisible)}>Code Preview</Button>
      </div>
      {codeVisible && codePreview}
    </>
  );
};

export default Demo;

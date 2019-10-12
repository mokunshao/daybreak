import React from 'react';

interface Props {
  code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const { code, children } = props;
  return (
    <>
      {children}
      <pre>
        {code}
      </pre>
    </>
  );
};

export default Demo;

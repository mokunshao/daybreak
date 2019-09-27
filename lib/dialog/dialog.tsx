import React from 'react';

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, children } = props;
  return (
    visible ? <>{children}</> : null
  );
};

export default Dialog;

import React from 'react';

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible } = props;
  return (
    visible ? <div>Dialog</div> : null
  );
};

export default Dialog;

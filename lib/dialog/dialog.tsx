import React from 'react';
import './dialog.scss';

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, children } = props;
  return (
    visible ? (
      <>
        <div className="daybreak-dialog-mask" />
        <div className="daybreak-dialog">
          <div>
            <span className="daybreak-dialog-close">X</span>
          </div>
          {children}
        </div>
      </>
    ) : null
  );
};

export default Dialog;

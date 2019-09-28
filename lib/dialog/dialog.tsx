import React from 'react';
import './dialog.scss';
import { jc } from '../utils/joinedClasses';

interface Props {
  visible: boolean
}

const dialog = jc('dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, children } = props;
  return (
    visible ? (
      <>
        <div className={dialog('mask')} />
        <div className={dialog()}>
          <div>
            <span className={dialog('close')}>X</span>
          </div>
          <div>{dialog('home')}</div>
          {children}
        </div>
      </>
    ) : null
  );
};

export default Dialog;

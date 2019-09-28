import React from 'react';
import './dialog.scss';
import { jc } from '../utils/joinedClasses';

interface Props {
  visible: boolean
  title?: string
}

const dialog = jc('dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, title, children } = props;
  return (
    visible ? (
      <>
        <div className={dialog('mask')} />
        <div className={dialog()}>
          <div className={dialog('header')}>
            <span className={dialog('title')}>{title}</span>
            <button type="button" className={dialog('close')}>X</button>
          </div>
          <div className={dialog('main')}>
            {children}
          </div>
          <div className={dialog('footer')}>
            <button type="button">Yes</button>
            <button type="button">No</button>
          </div>
        </div>
      </>
    ) : null
  );
};

export default Dialog;

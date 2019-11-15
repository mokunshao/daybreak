import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import joinedClass from '../utils/joinedClass';
import { Button } from '../button/button';

interface Props {
  visible: boolean;
  onClose: Function;
  title?: string;
  buttons?: Array<React.ReactElement>;
  closeOnClickMask?: boolean;
  closeOnEsc?: boolean;
}

const dialog = joinedClass('dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const {
    visible, title, buttons, onClose, closeOnClickMask = true, closeOnEsc = true, children,
  } = props;

  const onClickClose: React.MouseEventHandler = (event) => {
    if (closeOnClickMask) {
      onClose(event);
    }
  };

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (visible && closeOnEsc && event.keyCode === 27) {
        onClose(event);
      }
    };
    if (visible && closeOnEsc) {
      document.body.addEventListener('keyup', onKeyUp);
    }
    return () => {
      document.body.removeEventListener('keyup', onKeyUp);
    };
  }, [closeOnEsc, onClose, visible]);

  const content = visible ? (
    <>
      <div className={dialog('mask')} onClick={onClickClose} />
      <div className={dialog()}>
        <div className={dialog('header')}>
          <span className={dialog('title')}>{title}</span>
          <Button type="button" className={dialog('close')} onClick={(e) => onClose(e)}>X</Button>
        </div>
        <div className={dialog('main')}>
          {children}
        </div>
        {
          buttons && buttons.length > 0 && (
            <div className={dialog('footer')}>
              {buttons.map((item, index) => React.cloneElement(item, { key: index }))}
            </div>
          )
        }
      </div>
    </>
  ) : null;

  return ReactDOM.createPortal(content, document.body);
};

const Modal = (
  content: React.ReactNode,
  buttons?: Array<React.ReactElement>,
  afterClose?: Function,
) => {
  const div = document.createElement('div');
  let component = <></>;

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  component = (
    <Dialog
      visible
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );

  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onClose;
};

const Alert = (content: React.ReactNode) => {
  const onClose = Modal(content, [<Button type="button" onClick={() => onClose()}>OK</Button>]);
};

const Confirm = (content: React.ReactNode, yes?: Function, no?: Function) => {
  let onClose = () => { };

  const onYes = () => {
    onClose();
    yes && yes();
  };

  const onNo = () => {
    onClose();
    no && no();
  };

  const buttons = [
    <Button type="button" onClick={onYes}>Yes</Button>,
    <Button type="button" onClick={onNo}>No</Button>,
  ];

  onClose = Modal(content, buttons, no);
};

export default Dialog;

export {
  Dialog,
  Modal,
  Alert,
  Confirm,
};

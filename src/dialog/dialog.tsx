import React, {
  useEffect, useCallback, HTMLProps, ReactElement,
} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import joinedClass from '../utils/joinedClass';
import { Button } from '../button/button';
import classes from '../utils/classes';

interface Props extends HTMLProps<HTMLDivElement> {
  visible: boolean;
  onClose: Function;
  title?: string;
  buttons?: Array<React.ReactElement>;
  closeOnClickMask?: boolean;
  closeOnEsc?: boolean;
  preventBackgroundScrolling?: boolean;
}

const baseClass = joinedClass('dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const {
    visible, title, buttons, onClose, closeOnClickMask = true,
    closeOnEsc = true, preventBackgroundScrolling = false, children,
    className, ...rest
  } = props;

  const handleClickMask: React.MouseEventHandler = useCallback((event) => {
    if (closeOnClickMask) {
      onClose(event);
    }
  }, [closeOnClickMask, onClose]);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      onClose(event);
    }
  }, [onClose]);

  const addKeyUpEvent = useCallback(() => document.body.addEventListener('keyup', handleKeyUp), [handleKeyUp]);

  const removeKeyUpEvent = useCallback(() => document.body.removeEventListener('keyup', handleKeyUp), [handleKeyUp]);

  useEffect(() => {
    if (closeOnEsc) {
      if (visible) {
        addKeyUpEvent();
      } else {
        removeKeyUpEvent();
      }
    }

    return () => {
      removeKeyUpEvent();
    };
  }, [addKeyUpEvent, closeOnEsc, handleKeyUp, removeKeyUpEvent, visible]);

  const addBodyFixed = useCallback(() => {
    document.body.style.setProperty('overflow', 'hidden');
  }, []);

  const removeBodyFixed = useCallback(() => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.removeProperty('overflow');
    }
  }, []);

  useEffect(() => {
    if (preventBackgroundScrolling) {
      if (visible) {
        addBodyFixed();
      } else {
        removeBodyFixed();
      }
    }

    return () => {
      removeBodyFixed();
    };
  }, [addBodyFixed, preventBackgroundScrolling, removeBodyFixed, visible]);

  const content = (
    <>
      <div className={baseClass('mask')} onClick={handleClickMask} />
      <div className={classes(baseClass(), className)} {...rest}>
        <div className={baseClass('header')}>
          <span className={baseClass('title')}>{title}</span>
          <Button type="button" className={baseClass('close')} onClick={(e) => onClose(e)}>X</Button>
        </div>
        <div className={baseClass('main')}>
          {children}
        </div>
        {
          buttons && buttons.length > 0 && (
            <div className={baseClass('footer')}>
              {buttons.map((item, index) => React.cloneElement(item, { key: index }))}
            </div>
          )
        }
      </div>
    </>
  );

  if (visible) {
    return ReactDOM.createPortal(content, document.body);
  }

  return null;
};

const Modal = (
  content: React.ReactNode,
  buttons?: Array<React.ReactElement>,
  onClose?: Function,
) => {
  const container = document.createElement('div');
  let modal: ReactElement;

  const removeModal = () => {
    ReactDOM.render(React.cloneElement(modal, { visible: false }), container);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };

  const handleOnClose = () => {
    removeModal();
    if (onClose) onClose();
  };

  modal = (
    <Dialog
      visible
      onClose={handleOnClose}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );

  document.body.appendChild(container);
  ReactDOM.render(modal, container);
  return removeModal;
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

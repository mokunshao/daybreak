import React from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import joinedClass from '../utils/joinedClass';

interface Props {
  visible: boolean
  onClose: React.MouseEventHandler
  title?: string
  buttons?: Array<React.ReactElement>
  closeOnClickMask?: boolean
}

const dialog = joinedClass('dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const {
    visible, title, buttons, onClose, closeOnClickMask = true, children,
  } = props;

  const onClickClose: React.MouseEventHandler = (event) => {
    if (closeOnClickMask) {
      onClose(event);
    }
  };

  const content = visible ? (
    <>
      <div className={dialog('mask')} onClick={onClickClose} />
      <div className={dialog()}>
        <div className={dialog('header')}>
          <span className={dialog('title')}>{title}</span>
          <button type="button" className={dialog('close')} onClick={onClose}>X</button>
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

const modal = (
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

const alert = (content: React.ReactNode) => {
  const onClose = modal(content, [<button type="button" onClick={() => onClose()}>OK</button>]);
};

const confirm = (content: React.ReactNode, yes?: Function, no?: Function) => {
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
    <button type="button" onClick={onYes}>yes</button>,
    <button type="button" onClick={onNo}>no</button>,
  ];

  onClose = modal(content, buttons, no);
};

export default Dialog;

export { modal, alert, confirm };

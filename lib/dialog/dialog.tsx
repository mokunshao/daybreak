import React from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import { jc } from '../utils/joinedClasses';

interface Props {
  visible: boolean
  onClose: React.MouseEventHandler
  title?: string
  buttons?: Array<React.ReactElement>
  closeOnClickMask?: boolean
}

const dialog = jc('dialog');

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
        <div className={dialog('footer')}>
          {buttons && buttons.map((item, index) => React.cloneElement(item, { key: index }))}
        </div>
      </div>
    </>
  ) : null;

  return ReactDOM.createPortal(content, document.body);
};

const alert = (content: string) => {
  const div = document.createElement('div');

  const component = (
    <Dialog
      visible
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );

  document.body.append(div);
  ReactDOM.render(component, div);
};

export default Dialog;

export { alert };

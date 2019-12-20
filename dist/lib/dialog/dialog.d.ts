import React from 'react';
import './dialog.scss';
interface Props {
    visible: boolean;
    onClose: Function;
    title?: string;
    buttons?: Array<React.ReactElement>;
    closeOnClickMask?: boolean;
    closeOnEsc?: boolean;
}
declare const Dialog: React.FunctionComponent<Props>;
declare const Modal: (content: React.ReactNode, buttons?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[] | undefined, afterClose?: Function | undefined) => () => void;
declare const Alert: (content: React.ReactNode) => void;
declare const Confirm: (content: React.ReactNode, yes?: Function | undefined, no?: Function | undefined) => void;
export default Dialog;
export { Dialog, Modal, Alert, Confirm, };
//# sourceMappingURL=dialog.d.ts.map
import React, { HTMLProps } from 'react';
import './dialog.scss';
interface Props extends HTMLProps<HTMLDivElement> {
    visible: boolean;
    onClose: Function;
    title?: string;
    buttons?: Array<React.ReactElement>;
    closeOnClickMask?: boolean;
    closeOnEsc?: boolean;
    preventBackgroundScrolling?: boolean;
    hasMask?: boolean;
}
declare const Dialog: React.FunctionComponent<Props>;
declare const Modal: (content: React.ReactNode, buttons?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[] | undefined, onClose?: Function | undefined, override?: {
    [k: string]: any;
} | undefined) => () => void;
declare const Alert: (content: React.ReactNode, override?: {
    [k: string]: any;
} | undefined) => void;
declare const Confirm: (content: React.ReactNode, onOk?: Function | undefined, onCancel?: Function | undefined, override?: {
    [k: string]: any;
} | undefined) => void;
export default Dialog;
export { Dialog, Modal, Alert, Confirm, };
//# sourceMappingURL=dialog.d.ts.map
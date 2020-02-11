import React, { FormHTMLAttributes } from 'react';
import './form.scss';
export interface FormValues {
    [K: string]: any;
}
export interface ErrorsMap {
    [k: string]: string;
}
interface Props extends FormHTMLAttributes<HTMLFormElement> {
    values: FormValues;
    fields: Array<{
        name: string;
        label: string;
        input: {
            type: string;
        };
    }>;
    buttons: React.ReactFragment;
    onSubmit: React.FormEventHandler;
    onChange: (values: FormValues) => void;
    errors: {
        [key: string]: string[];
    };
    errorsDisplayMode?: 'first' | 'all';
    transformError?: (erorr: string) => string;
    clearable?: boolean;
}
export declare const Form: React.FunctionComponent<Props>;
export default Form;
//# sourceMappingURL=form.d.ts.map
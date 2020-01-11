import React, { Fragment, FormHTMLAttributes } from 'react';
import Input from '../input/input';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './form.scss';

const form = joinedClass('form');

export interface FormValues {
  [K: string]: any;
}

export interface ErrorsMap {
  [k: string]: string;
}

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  values: FormValues;
  fields: Array<{ name: string; label: string; input: { type: string; }; }>;
  buttons: React.ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (values: FormValues) => void;
  errors: { [key: string]: string[]; };
  errorsDisplayMode?: 'first' | 'all';
  transformError?: (erorr: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const {
    values,
    fields,
    buttons,
    onSubmit,
    onChange,
    errors,
    className,
    errorsDisplayMode = 'first',
    transformError,
  } = props;
  const onSubmit2 = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onChange2 = (name: string, value: string) => {
    const data = { ...values, [name]: value };
    onChange(data);
  };
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.currentTarget.blur();
    }
  };
  const transformError2 = (error: string) => {
    const errorsMap: ErrorsMap = {
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
      pattern: 'wrong format',
    };
    return (transformError && transformError(error)) || errorsMap[error] || error;
  };
  const showErrors = (name: string) => {
    if (errors[name]) {
      switch (errorsDisplayMode) {
        case 'first':
          return transformError2(errors[name][0]);
        case 'all':
          return errors[name].map(transformError2).join(', ');
        default:
          return transformError2(errors[name][0]);
      }
    }
    // return <>&nbsp;</>;
    return null;
  };
  return (
    <form onSubmit={onSubmit2} className={classes(form(), className)}>
      <table>
        <tbody>
          {fields.map((item) => (
            <Fragment key={item.name}>
              <tr>
                <td>
                  <label htmlFor={item.name}>{item.label}</label>
                </td>
                <td>
                  <Input
                    id={item.name}
                    type={item.input.type}
                    value={values[item.name]}
                    onChange={(e) => onChange2(item.name, e.target.value)}
                    onKeyUp={onKeyUp}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <small className={form('errors')}>
                    {showErrors(item.name)}
                  </small>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td>
              {buttons}
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
};

export default Form;

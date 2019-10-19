import React, { Fragment } from 'react';
import Input from '../input/input';

export interface FormValues {
  [K: string]: any
}

interface Props {
  values: FormValues
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: React.ReactFragment
  onSubmit: React.FormEventHandler
  onChange: (values: FormValues) => void
  errors: { [key: string]: string[] }
}

const Form: React.FunctionComponent<Props> = (props) => {
  const {
    values,
    fields,
    buttons,
    onSubmit,
    onChange,
    errors,
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
  return (
    <form onSubmit={onSubmit2}>
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
                <td>{errors[item.name]}</td>
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

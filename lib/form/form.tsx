import React from 'react';

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
  const onChange2 = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...values, [name]: e.target.value };
    onChange(data);
  };
  return (
    <form onSubmit={onSubmit2}>
      {fields.map((item) => (
        <div key={item.name}>
          {item.label}
          <input
            type={item.input.type}
            value={values[item.name]}
            onChange={onChange2.bind(null, item.name)}
          />
          <div>{errors[item.name]}</div>
        </div>
      ))}
      <div>
        {buttons}
      </div>
    </form>
  );
};

export default Form;

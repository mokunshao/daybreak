import React from 'react';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: React.ReactFragment
  onSubmit: React.FormEventHandler
  onChange: (value: FormValue) => void
}

const Form: React.FunctionComponent<Props> = (props) => {
  const {
    value,
    fields,
    buttons,
    onSubmit,
    onChange,
  } = props;
  const onSubmit2 = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onChange2 = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...value, [name]: e.target.value };
    onChange(data);
  };
  return (
    <form onSubmit={onSubmit2}>
      {fields.map((item) => (
        <div key={item.name}>
          {item.label}
          <input
            type={item.input.type}
            value={value[item.name]}
            onChange={onChange2.bind(null, item.name)}
          />
        </div>
      ))}
      <div>
        {buttons}
      </div>
    </form>
  );
};

export default Form;

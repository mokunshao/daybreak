import React from 'react';

interface Props {
  value: { [K: string]: any }
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: React.ReactFragment
}

const Form: React.FunctionComponent<Props> = (props) => {
  const { fields, buttons } = props;
  return (
    <form>
      {fields.map((item) => (
        <div key={item.name}>
          {item.label}
          <input type={item.input.type} />
        </div>
      ))}
      <div>
        {buttons}
      </div>
    </form>
  );
};

export default Form;

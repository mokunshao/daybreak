import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Form } from '../form';
import { Validator, noError } from '../validator';

describe('Form', () => {
  it('exit', () => {
    expect(Form).toBeTruthy();
  });
  it('match snapshot', () => {
    function Example() {
      const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const errors = {};
      const [fields] = useState([
        { name: 'username', label: '用户名', input: { type: 'text' } },
        { name: 'password', label: '密码', input: { type: 'password' } },
      ]);
      const onSubmit = () => {
      };
      const onChange = (data: any) => {
        setFormData(data);
      };
      const buttons = (
        <>
          <button type="submit">提交</button>
        </>
      );
      return (
        <div>
          <Form
            values={formData}
            fields={fields}
            buttons={buttons}
            errors={errors}
            onSubmit={onSubmit}
            onChange={onChange}
          />
        </div>
      );
    }
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('validator', () => {
  it('validator', () => {
    const formData = {
      username: '',
      password: '',
    };
    const rules = [
      { key: 'username', require: true },
      { key: 'username', minLength: 3, maxLength: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', require: true },
    ];
    Validator(formData, rules, (errorsResult: any) => {
      expect(errorsResult).toStrictEqual({ username: ['required', 'pattern'], password: ['required'] });
    });
  });
  it('noError', () => {
    expect(noError({})).toBe(true);
    expect(noError({ username: ['required'] })).toBe(false);
  });
});

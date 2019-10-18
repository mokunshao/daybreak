import React, { useState } from 'react';
import Form, { FormValues } from './form';
import { Validator } from './validator';

export default () => {
  const [formData, setFormData] = useState<FormValues>({
    username: 'test',
    password: 'test',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const onSubmit = () => {
    const rules = [
      { key: 'username', require: true },
      { key: 'username', minLength: 3, maxLength: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', require: true },
    ];
    const errors = Validator(formData, rules);
    console.log(errors);
  };
  const onChange = (data: FormValues) => setFormData(data);
  return (
    <div>
      <Form
        values={formData}
        fields={fields}
        buttons={
          (
            <>
              <button type="submit">提交</button>
              <button type="button">返回</button>
            </>
          )
        }
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
};

import React, { useState } from 'react';
import Form, { FormValues } from './form';
import { Validator, noError } from './validator';
import { Alert } from '../dialog/dialog';
import { Button } from '../button/button';

export default () => {
  const [formData, setFormData] = useState<FormValues>({
    username: 'test',
    password: 'test',
  });
  const [errors, setErrors] = useState({});
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const rules = [
    { key: 'username', require: true },
    { key: 'username', minLength: 3, maxLength: 16 },
    { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
    { key: 'password', require: true },
  ];
  const onSubmit = () => {
    const errorsResult = Validator(formData, rules);
    setErrors(errorsResult);
    if (noError(errorsResult)) {
      Alert('表单验证通过');
    }
  };
  const onChange = (data: FormValues) => {
    setFormData(data);
    const errorsResult = Validator(data, rules);
    setErrors(errorsResult);
  };
  return (
    <div>
      <Form
        values={formData}
        fields={fields}
        buttons={
          (
            <>
              <Button type="submit">提交</Button>
              <Button type="button">返回</Button>
            </>
          )
        }
        errors={errors}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
};

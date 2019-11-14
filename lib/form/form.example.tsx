import React, { useState } from 'react';
import Form, { FormValues } from './form';
import { Validator, noError } from './validator';
import { Alert } from '../dialog/dialog';
import { Button } from '../button/button';

function checkUserName(username: string, resolve: any, reject: any) {
  setTimeout(() => {
    if (username) {
      resolve();
    } else {
      reject();
    }
  }, 0);
}

const usernameValidator = {
  name: 'unique username',
  validate: (username: string) => (
    new Promise<void>((resolve, reject) => checkUserName(username, resolve, reject))
  ),
};

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
    { key: 'username', validator: usernameValidator },
  ];
  const onSubmit = () => {
    Validator(formData, rules, (errorsResult: any) => {
      setErrors(errorsResult);
      if (noError(errorsResult)) {
        Alert('表单验证通过');
      }
    });
  };
  const onChange = (data: FormValues) => {
    setFormData(data);
    Validator(data, rules, (errorsResult: any) => {
      setErrors(errorsResult);
    });
  };
  return (
    <div>
      <Form
        values={formData}
        fields={fields}
        buttons={
          (
            <>
              <Button mode="primary" type="submit" style={{ marginRight: '0.5em' }}>提交</Button>
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

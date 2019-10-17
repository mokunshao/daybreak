import React, { useState } from 'react';
import Form, { FormValue } from './form';

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'fafa',
    password: 'qqq',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const onSubmit = () => console.log(formData);
  const onChange = (data: FormValue) => setFormData(data);
  return (
    <div>
      <Form
        value={formData}
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

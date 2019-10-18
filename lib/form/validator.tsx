import { FormValues } from './form';

interface FormRule {
  key: string
  require?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}

type FormRules = Array<FormRule>;

interface FormErrors {
  [k: string]: string[]
}

function isEmpty(value: any) {
  return value === null || value === undefined || value === '';
}

const Validator = (values: FormValues, rules: FormRules): FormErrors => {
  const errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.forEach((rule) => {
    const { key } = rule;
    const value = values[key];
    if (rule.require && isEmpty(value)) {
      addError(key, '必填');
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(key, '太短');
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(key, '太长');
    }
    if (rule.pattern && !(rule.pattern.test(value))) {
      addError(key, '格式不合法');
    }
  });
  return errors;
};

export default Validator;
export { Validator };

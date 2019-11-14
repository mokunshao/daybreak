import { FormValues } from './form';

interface FormRule {
  key: string
  require?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?: {
    name: string,
    validate: (value: string) => Promise<void>
  }
}

type FormRules = Array<FormRule>;

interface FormErrors {
  [key: string]: string[]
}

function isEmpty(value: any) {
  return value === null || value === undefined || value === '';
}

export function noError(error: object) {
  return Object.keys(error).length === 0;
}

function flat(arr: Array<string | Promise<void>>) {
  const result: any = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.concat(flat(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

const Validator = (values: FormValues, rules: FormRules, callback: Function): void => {
  const errors: any = {};
  const addError = (key: string, message: string | Promise<void>) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.forEach((rule) => {
    const { key } = rule;
    const value = values[key];
    if (rule.validator) {
      const promise = rule.validator.validate(value);
      addError(key, 'promise');
    }
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
  Promise.all(flat(Object.values(errors))).then(() => {
    callback(errors);
  }, () => {
    callback(errors);
  });
};

export default Validator;
export { Validator };

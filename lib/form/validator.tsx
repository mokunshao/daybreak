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

function flat(arr: Array<any>): Array<any> {
  const result: Array<any> = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  return result;
}

function fromEntries(array: Array<[string, string[]]>): { [key: string]: string[] } {
  const result: { [key: string]: string[] } = {};
  array.forEach(([k, v]) => {
    result[k] = v;
  });
  return result;
}

interface Message {
  text: string
  promise?: Promise<void>
}

const Validator = (values: FormValues, rules: FormRules, callback: Function): void => {
  const errors: any = {};
  const addError = (key: string, message: Message) => {
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
      addError(key, { text: '用户名已经存在', promise });
    }
    if (rule.require && isEmpty(value)) {
      addError(key, { text: '必填' });
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(key, { text: '太短' });
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(key, { text: '太长' });
    }
    if (rule.pattern && !(rule.pattern.test(value))) {
      addError(key, { text: '格式不合法' });
    }
  });

  const PromiseList = flat(Object.values(errors)).filter((item) => item.promise).map((item) => (
    item.promise
  ));

  Promise.all(PromiseList).then(() => {
    const newErrors = fromEntries(
      Object.keys(errors).map((key) => [key, errors[key].map((item: Message) => item.text)]),
    );
    callback(newErrors);
  }, () => {
    const newErrors = fromEntries(
      Object.keys(errors).map((key) => [key, errors[key].map((item: Message) => item.text)]),
    );
    callback(newErrors);
  });
};

export default Validator;
export { Validator };

import { FormValues } from './form';

interface FormRule {
  key: string
  require?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?: (value: string) => Promise<string>
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

// function fromEntries(array: Array<[string, string[]]>): FormErrors {
//   const result: FormErrors = {};
//   array.forEach(([k, v]) => {
//     result[k] = v;
//   });
//   return result;
// }

function zip(arr: Array<[string, string]>) {
  const result: FormErrors = {};
  arr.forEach(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

type Message = string | Promise<string>

interface Errors {
  [key: string]: Array<Message>
}

const Validator = (values: FormValues, rules: FormRules, callback: Function): void => {
  const errors: Errors = {};
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
      const promise = rule.validator(value);
      addError(key, promise);
    }
    if (rule.require && isEmpty(value)) {
      addError(key, 'required');
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(key, 'minLength');
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(key, 'maxLength');
    }
    if (rule.pattern && !(rule.pattern.test(value))) {
      addError(key, 'pattern');
    }
  });

  const flattenErrors = flat((Object.keys(errors).map(
    (key) => errors[key].map((promise) => [key, promise]),
  )));

  const newPromise = flattenErrors.map(([key, message]): Promise<[any, any]> => {
    const promise = message instanceof Promise ? message : Promise.reject(message);
    return promise.then(() => [key, undefined], (reson) => [key, reson]);
  });

  Promise.all(newPromise).then((res) => callback(zip(res.filter((item) => item[1]))));
};

export default Validator;
export { Validator };

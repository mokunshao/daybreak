import { FormValues } from './form';

interface FormRule {
  key: string
  require?: boolean
  mixLength?: number
  maxLength?: number
}

type FormRules = Array<FormRule>;

interface FormErrors {
  [k: string]: string[]
}

const Validator = (values: FormValues, rules: FormRules): FormErrors => {
  const errors: any = {};
  rules.forEach((rule) => {
    const { key } = rule;
    const value = values[key];
    if (rule.require) {
      if (value === null || value === undefined || value === '') {
        errors[key] = ['必填'];
      }
    }
  });
  return errors;
};

export default Validator;
export { Validator };

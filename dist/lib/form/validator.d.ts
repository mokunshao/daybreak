import { FormValues } from './form';
interface FormRule {
    key: string;
    require?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: (value: string) => Promise<string>;
}
declare type FormRules = Array<FormRule>;
export declare function noError(error: object): boolean;
declare const Validator: (values: FormValues, rules: FormRules, callback: Function) => void;
export default Validator;
export { Validator };
//# sourceMappingURL=validator.d.ts.map
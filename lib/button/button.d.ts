import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: 'normal' | 'primary' | 'danger';
    loading?: boolean;
    outlined?: boolean;
}
declare const Button: React.FunctionComponent<Props>;
export default Button;
export { Button };
//# sourceMappingURL=button.d.ts.map
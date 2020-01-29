import React, { useState, HtmlHTMLAttributes } from 'react';
import { Button } from '../button/button';
import { classes } from '../utils/classes';
import { joinedClass } from '../utils/joinedClass';
import './code-preview.scss';

const codePreview = joinedClass('code-preview');

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  code: string;
}

export const CodePreview: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const { code, className } = props;
  const preview = <pre className={codePreview('content')}><code>{code}</code></pre>;
  return (
    <div className={classes(codePreview(), className)}>
      <div className={codePreview('button-wrapper')}>
        <Button type="button" onClick={() => setCodeVisible(!codeVisible)}>Code Preview</Button>
      </div>
      {codeVisible && preview}
    </div>
  );
};

export default CodePreview;

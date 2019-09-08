import React from 'react';
import './icons/qq.svg';
import './icons/wechat.svg';
import './icons/alipay.svg';

type iconName = 'qq' | 'wechat' | 'alipay';

interface IconProps {
  name: string & iconName;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name } = props;
  return (
    <span>
      <svg>
        <use xlinkHref={`#${name}`} />
      </svg>
    </span>
  );
};

export default Icon;

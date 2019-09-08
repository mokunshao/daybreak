import React from 'react';
import './icon.scss';

const importAllIcons = () => {
  const requireContext = require.context('./icons', true, /\.svg$/);
  requireContext.keys().forEach(requireContext);
};

importAllIcons();

type iconName = 'qq' | 'wechat' | 'alipay';

interface IconProps {
  name: string & iconName;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name } = props;
  return (
    <svg className="kaka-icon">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;

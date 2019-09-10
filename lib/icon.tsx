import React from 'react';
import './icon.scss';
import classes from './utils/classes';

// 引入当前目录下 icon 文件夹的所有 svg 文件
const importAllIcons = () => {
  const requireContext = require.context('./icons', true, /\.svg$/);
  requireContext.keys().forEach(requireContext);
};

importAllIcons();

type iconName = 'qq' | 'wechat' | 'alipay';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string & iconName;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name, className, ...res } = props;
  return (
    <svg className={classes('kaka-icon', className)} {...res}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;

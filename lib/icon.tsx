import React from 'react';
// import './icons/qq.svg';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name } = props;
  return <span>{name}</span>;
};

export default Icon;

import React from 'react';

interface IconProps {
  src: string;
  width: number;
  height: number;
}

const Icon = ({ src, width, height }: IconProps) => {
  return <img src={src} width={width} height={height} />;
};

export default Icon;

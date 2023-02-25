import React, { ComponentProps } from 'react';

const Icon = ({ src, width, height }: ComponentProps<'img'>) => {
  return <img src={src} width={width} height={height} />;
};

export default Icon;

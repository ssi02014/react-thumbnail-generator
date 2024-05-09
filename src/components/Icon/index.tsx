import React, { ComponentProps } from 'react';

const Icon = ({ src, width, height, ...rest }: ComponentProps<'img'>) => {
  return <img src={src} width={width} height={height} {...rest} />;
};

export default Icon;

import React from 'react';
import { TGIConImage } from './TG.styled';

interface TGIconProps {
  src: string;
  width: number;
  height: number;
}
const TGIcon = ({ src, width, height }: TGIconProps) => {
  return <TGIConImage src={src} width={width} height={height} />;
};

export default TGIcon;

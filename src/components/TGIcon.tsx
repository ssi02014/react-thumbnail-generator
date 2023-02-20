import React from 'react';
import { TGIConImage } from './TG.styled';

interface TGIconProps {
  src: string;
  width: number;
  height: number;
  color?: string;
}
const TGIcon = ({ src, width, height, color }: TGIconProps) => {
  return <TGIConImage src={src} width={width} height={height} color={color} />;
};

export default TGIcon;

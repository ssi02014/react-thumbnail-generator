import React from 'react';
import { ImageTypes } from '../types/canvas';

export const getValidMessage = (
  condition: boolean,
  type: 'imageSize' | 'canvasSize' | 'fontAngle'
) => {
  const message = {
    imageSize: `Please register a picture smaller than "Limit Width"`,
    canvasSize: `Please set the canvas width smaller than "Limit Width"`,
    fontAngle: 'Please set a value in the range of -360 to 360',
  } as { [key: string]: string };

  if (condition) return message[type];
  return '';
};

export const downloadCanvas = (
  ref: React.RefObject<HTMLCanvasElement>,
  imageType: ImageTypes
) => {
  const url = ref.current?.toDataURL(`image/${imageType}`);
  const link = document.createElement('a');

  link.href = url as string;
  link.setAttribute('download', `thumbnail.${imageType}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

import React from 'react';
import { ImageTypes } from '../types/canvas';

export const getValidMessage = (
  condition: boolean,
  type: 'imageSize' | 'canvasSize'
) => {
  const LIMIT_WIDTH = window.innerWidth - 70;
  const message = {
    imageSize: 'Please register a picture smaller than Limit Width Size.',
    canvasSize: `Please set the width smaller than ${LIMIT_WIDTH}px`,
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

import Konva from 'konva';
import React from 'react';

export type ValidType = 'imageSize' | 'canvasSize' | 'angle' | 'lineHeight';

export const getValidMessage = (condition: boolean, type: ValidType) => {
  const message = {
    angle: 'Please set the value to within the range',
    lineHeight: 'Please set the value to within the range',
  } as { [key: string]: string };

  if (condition) return message[type];
  return '';
};

const download = (url: string, imageType: string = 'png') => {
  const link = document.createElement('a');

  link.href = url as string;
  link.setAttribute('download', `thumbnail.${imageType}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCanvas = (
  ref: React.RefObject<Konva.Stage>,
  imageType: 'png' | 'jpg' | 'webp',
) => {
  if (ref.current) {
    const url = ref.current.toDataURL();
    download(url, imageType);
  }
};

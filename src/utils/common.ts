import Konva from 'konva';
import React from 'react';

const download = (url: string, imageType: 'png' | 'jpg' | 'webp' = 'png') => {
  const link = document.createElement('a');

  link.href = url as string;
  link.setAttribute('download', `thumbnail.${imageType}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCanvas = (
  ref: React.RefObject<Konva.Stage | null>,
  imageType: 'png' | 'jpg' | 'webp',
) => {
  if (ref?.current) {
    const url = ref.current.toDataURL({ quality: 1 });
    download(url, imageType);
  }
};

export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

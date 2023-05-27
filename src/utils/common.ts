import React from 'react';
import { ImageTypes } from '../types/canvas';

export type ValidType = 'imageSize' | 'canvasSize' | 'angle' | 'lineHeight';

export const getValidMessage = (condition: boolean, type: ValidType) => {
  const message = {
    imageSize: `Please register a picture smaller than "Limit Width"`,
    canvasSize: `Please set the canvas width smaller than "Limit Width"`,
    angle: 'Please set a value in the range of -360 to 360',
    lineHeight: 'Please set a value in the range of 0 to 360',
  } as { [key: string]: string };

  if (condition) return message[type];
  return '';
};

const download = (url: string, imageType: string) => {
  const link = document.createElement('a');

  link.href = url as string;
  link.setAttribute('download', `thumbnail.${imageType}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCanvas = (
  ref: React.RefObject<HTMLCanvasElement>,
  imageType: ImageTypes
) => {
  if (ref.current) {
    if (imageType === 'svg') {
      const imgWidth = ref.current.width;
      const imgHeight = ref.current.height;
      const base64 = ref.current.toDataURL('image/png');
      const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="${imgWidth}" height="${imgHeight}">
        <image xlink:href="${base64}" width="${imgWidth}" height="${imgHeight}" />
      </svg>
    `;

      const svgUrl =
        'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

      download(svgUrl, 'svg');
      return;
    }

    const url = ref.current.toDataURL(`image/${imageType}`);
    download(url, imageType);
  }
};

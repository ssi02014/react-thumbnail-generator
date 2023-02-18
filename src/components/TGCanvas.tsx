import React, { useEffect } from 'react';
import { Color } from 'react-color-palette';
import { TGCanvasWrapper } from './TG.styled';

interface TGCanvasProps {
  bgColor: Color;
  fontColor: Color;
  width: string;
  height: string;
  text: string;
  fontSize: string;
  fontStrokeType: 'None' | 'Thin' | 'Normal' | 'Thick';
  strokeColor: Color;
  fontFamily: string;
}

const TGCanvas = React.forwardRef(
  (
    {
      width,
      height,
      text,
      bgColor,
      fontColor,
      fontSize,
      strokeColor,
      fontStrokeType,
      fontFamily,
    }: TGCanvasProps,
    ref: any
  ) => {
    const getPxByFontStrokeType = () => {
      switch (fontStrokeType) {
        case 'Thin':
          return 3;
        case 'Normal':
          return 5;
        case 'Thick':
          return 7;
        default:
          return 0;
      }
    };

    const setFont = (canvas: HTMLCanvasElement, text: string, args: any) => {
      const ctx = canvas.getContext('2d');
      const lines = text.split('\n');

      if (ctx) {
        const { color, size, font } = args;
        ctx.font = `${size}px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lineHeight = size * 1.2;

        lines.forEach((line, idx) => {
          const x = canvas.width / 2;
          const y =
            canvas.height / 2 -
            ((lines.length - 1) * lineHeight) / 2 +
            idx * lineHeight;

          if (fontStrokeType !== 'None') {
            ctx.lineWidth = getPxByFontStrokeType();
            ctx.strokeStyle = `${strokeColor.hex}`;
            ctx.strokeText(line, x, y);
          }

          ctx.fillStyle = color;
          ctx.fillText(line, x, y);
        });
      }
    };

    useEffect(() => {
      const canvas = ref.current;

      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.fillStyle = bgColor.hex;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        setFont(canvas, text, {
          color: fontColor.hex,
          size: +fontSize.replace('px', ''),
          font: fontFamily,
        });
      }
    }, [
      text,
      width,
      height,
      bgColor,
      fontColor,
      fontSize,
      fontStrokeType,
      strokeColor,
      fontFamily,
    ]);

    return (
      <TGCanvasWrapper>
        <canvas ref={ref} width={+width} height={+height} />
      </TGCanvasWrapper>
    );
  }
);

TGCanvas.displayName = 'Search';

export default TGCanvas;

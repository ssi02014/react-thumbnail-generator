import React, { useEffect } from 'react';
import { Color } from 'react-color-palette';
import { TGCanvasWrapper } from './TG.styled';

interface TGCanvasProps {
  bgColor: Color;
  fontColor: Color;
  canvasSize: { width: string; height: string };
  fontAxisAndAngle: { xAxis: string; yAxis: string; angle: string };
  text: string;
  fontSize: string;
  fontStrokeType: 'None' | 'Thin' | 'Normal' | 'Thick';
  strokeColor: Color;
  fontFamily: string;
  selectedImage: HTMLImageElement | null;
}

const TGCanvas = React.forwardRef(
  (
    {
      canvasSize,
      text,
      bgColor,
      fontColor,
      fontSize,
      strokeColor,
      fontStrokeType,
      fontFamily,
      selectedImage,
      fontAxisAndAngle,
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
        const { xAxis, yAxis, angle } = fontAxisAndAngle;
        const { color, size, font } = args;

        ctx.font = `${size}px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lineHeight = size * 1.2;

        lines.forEach((line, idx) => {
          const x = canvas.width / 2 + parseInt(xAxis || '0');
          const y =
            canvas.height / 2 -
            ((lines.length - 1) * lineHeight) / 2 +
            idx * lineHeight +
            parseInt(yAxis || '0');

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((parseInt(angle) * Math.PI) / 180);

          if (fontStrokeType !== 'None') {
            ctx.lineWidth = getPxByFontStrokeType();
            ctx.strokeStyle = `${strokeColor.hex}`;
            ctx.strokeText(line, 0, 0);
          }

          ctx.fillStyle = color;
          ctx.fillText(line, 0, 0);
          ctx.restore();
        });
      }
    };

    useEffect(() => {
      const canvas = ref.current;

      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        if (selectedImage) {
          ctx.drawImage(selectedImage, 0, 0);
        } else {
          ctx.fillStyle = bgColor.hex;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        setFont(canvas, text, {
          color: fontColor.hex,
          size: +fontSize.replace('px', ''),
          font: fontFamily,
        });
      }
    }, [
      text,
      canvasSize,
      bgColor,
      fontColor,
      fontSize,
      fontStrokeType,
      strokeColor,
      fontFamily,
      selectedImage,
      fontAxisAndAngle,
    ]);

    return (
      <TGCanvasWrapper>
        <canvas
          ref={ref}
          width={+canvasSize.width}
          height={+canvasSize.height}
        />
      </TGCanvasWrapper>
    );
  }
);

TGCanvas.displayName = 'Search';

export default TGCanvas;

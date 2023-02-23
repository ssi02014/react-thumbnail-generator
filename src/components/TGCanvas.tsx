import React, { useEffect } from 'react';
import { Color } from 'react-color-palette';
import { CanvasState } from '../types/canvas';
import { TGCanvasWrapper } from './TG.styled';

interface TGCanvasProps {
  canvasState: CanvasState;
  bgColor: Color;
  fontColor: Color;
  strokeColor: Color;
}

const TGCanvas = React.forwardRef(
  (
    { canvasState, bgColor, fontColor, strokeColor }: TGCanvasProps,
    ref: any
  ) => {
    const {
      value,
      canvasWidth,
      canvasHeight,
      fontSize,
      fontStrokeType,
      selectedImage,
      fontFamily,
      xAxis,
      yAxis,
      angle,
    } = canvasState;

    const getLineWidthByStrokeType = () => {
      const strokeObj = {
        None: 0,
        Thin: 3,
        Normal: 5,
        Thick: 7,
      } as { [key: string]: number };

      return strokeObj[fontStrokeType];
    };

    const setCanvasText = (
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) => {
      const lines = value.split('\n');
      const size = +fontSize.replace('px', '');

      if (ctx) {
        ctx.font = `${size}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lineHeight = size * 1.2;

        lines.forEach((line, idx) => {
          const x = canvas.width / 2 + +(xAxis || '0');
          const y =
            canvas.height / 2 -
            ((lines.length - 1) * lineHeight) / 2 +
            idx * lineHeight +
            +(yAxis || '0');

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((+angle * Math.PI) / 180);

          if (fontStrokeType !== 'None') {
            ctx.lineWidth = getLineWidthByStrokeType();
            ctx.strokeStyle = `${strokeColor.hex}`;
            ctx.strokeText(line, 0, 0);
          }

          ctx.fillStyle = fontColor.hex;
          ctx.fillText(line, 0, 0);
          ctx.restore();
        });
      }
    };

    useEffect(() => {
      if (!ref.current) return;
      const canvas = ref.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        if (selectedImage) {
          ctx.drawImage(selectedImage, 0, 0);
        } else {
          ctx.fillStyle = bgColor.hex;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        setCanvasText(canvas, ctx);
      }
    }, [bgColor, fontColor, strokeColor, canvasState]);

    return (
      <TGCanvasWrapper>
        <canvas ref={ref} width={+canvasWidth} height={+canvasHeight} />
      </TGCanvasWrapper>
    );
  }
);

TGCanvas.displayName = 'Search';

export default TGCanvas;

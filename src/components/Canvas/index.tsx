import useDragAndDropText from '../../components/hooks/useDragAndDropText';
import React, { useEffect } from 'react';
import { Color } from 'react-color-palette';
import { CanvasState } from '../../types/canvas';
import * as S from './styled';

interface CanvasProps {
  canvasState: CanvasState;
  bgColor: Color;
  fontColor: Color;
  strokeColor: Color;
}

const Canvas = React.forwardRef(
  ({ canvasState, bgColor, fontColor, strokeColor }: CanvasProps, ref: any) => {
    const {
      value,
      canvasWidth,
      canvasHeight,
      fontSize,
      fontStrokeType,
      selectedImage,
      fontFamily,
      angle,
      isBlur,
    } = canvasState;
    const {
      dragAndDropTextData,
      handleCanvasMouseDown,
      handleCanvasMouseMove,
      handleCanvasMouseUp,
      handleCanvasMouseLeave,
      handleCanvasOffsetReset,
    } = useDragAndDropText(+canvasWidth, +canvasHeight);

    const getLineWidthByStrokeType = () => {
      const strokeObj = {
        None: 0,
        Thin: 3,
        Normal: 5,
        Thick: 7,
      } as { [key: string]: number };

      return strokeObj[fontStrokeType];
    };

    const calculateDirection = (
      linesLength: number,
      lineHeight: number,
      idx: number
    ) => {
      const { offsetX, offsetY } = dragAndDropTextData;

      const x = offsetX ? offsetX : +canvasWidth / 2;
      const y = offsetY
        ? offsetY - ((linesLength - 1) * lineHeight) / 2 + idx * lineHeight
        : +canvasHeight / 2 -
          ((linesLength - 1) * lineHeight) / 2 +
          idx * lineHeight;

      return { x, y };
    };

    const setCanvasText = (ctx: CanvasRenderingContext2D) => {
      const { offsetX, offsetY } = dragAndDropTextData;
      const lines = value.split('\n');
      const size = +fontSize.replace('px', '');
      const lineHeight = size * 1.15;
      const centerX = +canvasWidth / 2;
      const centerY = +canvasHeight / 2;

      ctx.font = `${size}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.save(); // 현재 상태 저장
      ctx.translate(offsetX ? offsetX : centerX, offsetY ? offsetY : centerY); // 중심으로 이동
      ctx.rotate((+angle * Math.PI) / 180); // 회전
      ctx.translate(
        offsetX ? -offsetX : -centerX,
        offsetY ? -offsetY : -centerY
      ); // 이전 위치로 이동

      lines.forEach((line, idx) => {
        const { x, y } = calculateDirection(lines.length, lineHeight, idx);

        ctx.save();
        ctx.translate(x, y);

        if (fontStrokeType !== 'None') {
          ctx.lineWidth = getLineWidthByStrokeType();
          ctx.strokeStyle = `${strokeColor.hex}`;
          ctx.strokeText(line, 0, 0);
        }
        ctx.fillStyle = fontColor.hex;
        ctx.fillText(line, 0, 0);
        ctx.restore();
      });
      ctx.restore();
    };

    useEffect(() => {
      if (!ref.current) return;
      const canvas = ref.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.save();

        if (isBlur) ctx.filter = 'blur(5px)'; // (*)
        if (selectedImage) {
          ctx.drawImage(selectedImage, 0, 0);
        } else {
          ctx.fillStyle = bgColor.hex;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.restore();
        setCanvasText(ctx);
      }
    }, [bgColor, fontColor, strokeColor, canvasState, dragAndDropTextData]);

    useEffect(() => {
      handleCanvasOffsetReset();
    }, [selectedImage]);

    return (
      <S.CanvasWrapper>
        <canvas
          ref={ref}
          width={+canvasWidth}
          height={+canvasHeight}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseLeave}
        />
      </S.CanvasWrapper>
    );
  }
);

Canvas.displayName = 'Search';

export default Canvas;

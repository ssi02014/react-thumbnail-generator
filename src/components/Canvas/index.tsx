import useDragAndDropText from '../../hooks/useDragAndDropText';
import React, { useEffect } from 'react';
import { CanvasStateWithColors } from '../../types/canvas';
import * as S from './styled';

interface CanvasProps {
  canvasState: CanvasStateWithColors;
}

const Canvas = React.forwardRef(({ canvasState }: CanvasProps, ref: any) => {
  const {
    value,
    lineHeight,
    canvasWidth,
    canvasHeight,
    fontSize,
    fontStrokeType,
    selectedImage,
    fontFamily,
    angle,
    isBlur,
    isBlockEvent,
    bgColor,
    fontColor,
    strokeColor,
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

  const getMultiLinePosition = (
    linesLength: number,
    lineHeight: number,
    idx: number
  ) => {
    const { offsetX, offsetY } = dragAndDropTextData;
    const centerX = +canvasWidth / 2;
    const centerY = +canvasHeight / 2;

    const x = offsetX ? offsetX : centerX;
    const y = offsetY
      ? offsetY - ((linesLength - 1) * lineHeight) / 2 + idx * lineHeight
      : centerY - ((linesLength - 1) * lineHeight) / 2 + idx * lineHeight;

    return { x, y };
  };

  const setFontStroke = (ctx: CanvasRenderingContext2D, line: string) => {
    if (fontStrokeType === 'None') return;

    ctx.lineWidth = getLineWidthByStrokeType();
    ctx.strokeStyle = `${strokeColor.hex}`;
    ctx.strokeText(line, 0, 0);
  };

  const rotateCanvas = (ctx: CanvasRenderingContext2D) => {
    const { offsetX, offsetY } = dragAndDropTextData;
    const centerX = +canvasWidth / 2;
    const centerY = +canvasHeight / 2;
    const moveX = offsetX ? offsetX : centerX;
    const moveY = offsetY ? offsetY : centerY;

    ctx.translate(moveX, moveY);
    ctx.rotate((+angle * Math.PI) / 180);
    ctx.translate(-moveX, -moveY);
  };

  const fillCanvasMultiLineText = (
    ctx: CanvasRenderingContext2D,
    lines: string[]
  ) => {
    const size = +fontSize.replace('px', '');
    const fontLineHeight = size + +lineHeight;

    lines.forEach((line, idx) => {
      const { x, y } = getMultiLinePosition(lines.length, fontLineHeight, idx);

      ctx.save();
      ctx.translate(x, y);

      setFontStroke(ctx, line);

      ctx.fillStyle = fontColor.hex;
      ctx.fillText(line, 0, 0);
      ctx.restore();
    });
  };

  const setCanvasText = (ctx: CanvasRenderingContext2D) => {
    const lines = value.split('\n');
    const size = +fontSize.replace('px', '');

    ctx.font = `${size}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.save();

    rotateCanvas(ctx);
    fillCanvasMultiLineText(ctx, lines);

    ctx.restore();
  };

  const fillBackground = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    if (selectedImage) {
      if (isBlur) ctx.filter = 'blur(5px)';
      ctx.drawImage(selectedImage, 0, 0);
      return;
    }

    ctx.fillStyle = bgColor.hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (!ref.current) return;
    const canvas = ref.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.save();
    fillBackground(canvas);
    ctx.restore();
    setCanvasText(ctx);
  }, [canvasState, dragAndDropTextData]);

  useEffect(() => {
    handleCanvasOffsetReset();
  }, [selectedImage]);

  return (
    <S.CanvasWrapper>
      <canvas
        ref={ref}
        width={+canvasWidth}
        height={+canvasHeight}
        onMouseDown={(e) => !isBlockEvent && handleCanvasMouseDown(e)}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
        onMouseLeave={handleCanvasMouseLeave}
      />
    </S.CanvasWrapper>
  );
});

Canvas.displayName = 'Search';

export default Canvas;

import useDragAndDropText from '@hooks/useDragAndDropText';
import React, { useCallback, useEffect } from 'react';
import { CanvasStateWithColors } from '@interfaces/common';
import * as styles from './Canvas.css';

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
    textAlign,
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

  const getLineWidthByStrokeType = useCallback(() => {
    const strokeObj = {
      None: 0,
      Thin: 3,
      Normal: 5,
      Thick: 7,
    } as { [key: string]: number };

    return strokeObj[fontStrokeType];
  }, [fontStrokeType]);

  const getCalculatedX = useCallback(
    (originWidth: number, lineMaxWidth: number) => {
      switch (textAlign) {
        case 'center':
          return originWidth;
        case 'right':
          return originWidth + lineMaxWidth / 2;
        default:
          return originWidth + (lineMaxWidth / 2) * -1;
      }
    },
    [textAlign, canvasWidth],
  );

  const getMultiLinePosition = useCallback(
    (
      linesLength: number,
      lineHeight: number,
      lineMaxWidth: number,
      idx: number,
    ) => {
      const { offsetX, offsetY } = dragAndDropTextData;
      const centerY = +canvasHeight / 2;
      const centerX = getCalculatedX(+canvasWidth / 2, lineMaxWidth);

      const x = offsetX ? getCalculatedX(offsetX, lineMaxWidth) : centerX;
      const y = offsetY
        ? offsetY - ((linesLength - 1) * lineHeight) / 2 + idx * lineHeight
        : centerY - ((linesLength - 1) * lineHeight) / 2 + idx * lineHeight;

      return { x, y };
    },
    [dragAndDropTextData, canvasHeight, getCalculatedX],
  );

  const setFontStroke = useCallback(
    (ctx: CanvasRenderingContext2D, line: string) => {
      if (fontStrokeType === 'None') return;

      ctx.lineWidth = getLineWidthByStrokeType();
      ctx.strokeStyle = `${strokeColor.hex}`;
      ctx.strokeText(line, 0, 0);
    },
    [fontStrokeType, strokeColor],
  );

  const rotateCanvas = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const { offsetX, offsetY } = dragAndDropTextData;
      const centerX = +canvasWidth / 2;
      const centerY = +canvasHeight / 2;
      const moveX = offsetX ? offsetX : centerX;
      const moveY = offsetY ? offsetY : centerY;

      ctx.translate(moveX, moveY);
      ctx.rotate((+angle * Math.PI) / 180);
      ctx.translate(-moveX, -moveY);
    },
    [dragAndDropTextData, canvasWidth, canvasHeight, angle],
  );

  const fillCanvasMultiLineText = useCallback(
    (ctx: CanvasRenderingContext2D, lines: string[]) => {
      const size = fontSize;
      const fontLineHeight = size + +lineHeight;
      let lineMaxWidth = 0;

      lines.forEach((line) => {
        lineMaxWidth = Math.max(lineMaxWidth, ctx.measureText(line).width);
      });

      lines.forEach((line, idx) => {
        const { x, y } = getMultiLinePosition(
          lines.length,
          fontLineHeight,
          lineMaxWidth,
          idx,
        );

        ctx.save();
        ctx.translate(x, y);

        setFontStroke(ctx, line);

        ctx.fillStyle = fontColor.hex;
        ctx.fillText(line, 0, 0);
        ctx.restore();
      });
    },
    [fontColor, fontSize, lineHeight, getMultiLinePosition, setFontStroke],
  );

  const setCanvasText = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const lines = value.split('\n');
      const size = +fontSize;

      ctx.font = `${size}px ${fontFamily}`;
      ctx.textAlign = textAlign;
      ctx.textBaseline = 'middle';

      ctx.save();

      rotateCanvas(ctx);
      fillCanvasMultiLineText(ctx, lines);

      ctx.restore();
    },
    [
      value,
      fontSize,
      fontFamily,
      textAlign,
      rotateCanvas,
      fillCanvasMultiLineText,
    ],
  );

  const fillBackground = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      if (selectedImage) {
        if (isBlur) ctx.filter = 'blur(5px)';
        ctx.drawImage(selectedImage, 0, 0);
        return;
      }

      ctx.fillStyle = bgColor.hex;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    [selectedImage, bgColor, isBlur],
  );

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
    <section className={styles.canvasWrapper}>
      <canvas
        ref={ref}
        width={+canvasWidth}
        height={+canvasHeight}
        onMouseDown={(e) => !isBlockEvent && handleCanvasMouseDown(e)}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
        onMouseLeave={handleCanvasMouseLeave}
      />
    </section>
  );
});

Canvas.displayName = 'Search';

export default Canvas;

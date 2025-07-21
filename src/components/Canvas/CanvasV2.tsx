import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Layer, Text, Stage, Transformer, Rect } from 'react-konva';
import { CanvasStateWithColors, StrokeTypes } from '../../interfaces/common';
import Konva from 'konva';
import { useMergeRefs, useOutsidePointerDown } from '@modern-kit/react';

interface CanvasV2Props {
  canvasState: CanvasStateWithColors;
}

const getTextCenterPosition = (text: Konva.Text) => {
  const textRect = text.getClientRect();
  const centerX = text.x() + textRect.width / 2;
  const centerY = text.y() + textRect.height / 2;

  return { x: centerX, y: centerY };
};

const getStrokeWidth = (strokeType: StrokeTypes) => {
  const strokeWidth = {
    None: 0,
    Thin: 1,
    Normal: 1.5,
    Thick: 2,
  };

  return strokeWidth[strokeType];
};

const CanvasV2 = forwardRef(({ canvasState }: CanvasV2Props, ref) => {
  const { ref: outsideRef } = useOutsidePointerDown<any>(() => {
    transformerRef.current?.nodes([]);
  });

  const [textCenterPosition, setTextCenterPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: canvasState.canvasWidth / 2,
    y: canvasState.canvasHeight / 2,
  });

  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const textRef = useRef<Konva.Text>(null);

  const handleDragEnd = () => {
    if (!stageRef.current) return;
    if (!textRef.current) return;

    const rect = stageRef.current.getPointerPosition();
    const textRect = textRef.current.getClientRect();
    const textRotation = textRef.current.rotation();

    if (!rect) return;

    const x = rect.x;
    const y = rect.y;
    const textWidth = textRect.width;
    const textHeight = textRect.height;

    if (
      x < 0 ||
      y < 0 ||
      x > canvasState.canvasWidth ||
      y > canvasState.canvasHeight
    ) {
      const stageCenterX = canvasState.canvasWidth / 2;
      const stageCenterY = canvasState.canvasHeight / 2;

      textRef.current?.setPosition({
        x: stageCenterX,
        y: stageCenterY,
      });
      textRef.current.offset({
        x: textWidth / 2,
        y: textHeight / 2,
      });
    } else {
      if (textRef.current) {
        const x = textRef.current.x() + textRect.width / 2;
        const y = textRef.current.y() + textRect.height / 2;

        setTextCenterPosition({
          x,
          y,
        });
      }
    }
  };
  console.log(textCenterPosition);

  const handleTextClick = () => {
    if (!transformerRef.current) return;
    if (!textRef.current) return;

    transformerRef.current.nodes([textRef.current]);
  };

  const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!transformerRef.current) return;
    if (e.target !== textRef.current) {
      transformerRef.current.nodes([]);
    }
  };

  // Update the position of text when changing text line height or content
  useEffect(() => {
    if (!textRef.current) return;

    const textRect = textRef.current.getClientRect();
    const newWidth = textRect.width;
    const newHeight = textRect.height;

    const newX = textCenterPosition.x - newWidth / 2;
    const newY = textCenterPosition.y - newHeight / 2;

    textRef.current.setPosition({
      x: newX,
      y: newY,
    });
  }, [
    canvasState.value,
    canvasState.lineHeight,
    textCenterPosition.x,
    textCenterPosition.y,
  ]);

  // Update text position when canvas width or height changes
  useEffect(() => {
    if (!textRef.current) return;

    const textRect = textRef.current.getClientRect();
    const newWidth = textRect.width;
    const newHeight = textRect.height;

    const centerX = canvasState.canvasWidth / 2;
    const centerY = canvasState.canvasHeight / 2;

    textRef.current.setPosition({
      x: centerX - newWidth / 2,
      y: centerY - newHeight / 2,
    });
    setTextCenterPosition({ x: centerX, y: centerY });
  }, [canvasState.canvasWidth, canvasState.canvasHeight]);

  return (
    <div ref={outsideRef}>
      <Stage
        ref={useMergeRefs(stageRef, ref)}
        width={canvasState.canvasWidth}
        height={canvasState.canvasHeight}>
        <Layer>
          <Rect
            onClick={handleStageClick}
            x={0}
            y={0}
            width={canvasState.canvasWidth}
            height={canvasState.canvasHeight}
            fill={
              canvasState.selectedImage ? undefined : canvasState.bgColor.hex
            }
            fillPatternImage={canvasState.selectedImage}
            shadowBlur={10}
          />

          <Text
            ref={textRef}
            x={textCenterPosition.x}
            y={textCenterPosition.y}
            fontSize={30}
            fill={canvasState.fontColor.hex}
            stroke={canvasState.strokeColor.hex}
            lineHeight={canvasState.lineHeight}
            strokeWidth={getStrokeWidth(canvasState.fontStrokeType)}
            text={canvasState.value}
            onClick={handleTextClick}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => (document.body.style.cursor = 'pointer')}
            onMouseLeave={() => (document.body.style.cursor = 'default')}
            align={canvasState.textAlign}
            draggable
          />

          <Transformer ref={transformerRef} />
        </Layer>
      </Stage>
    </div>
  );
});

export default CanvasV2;

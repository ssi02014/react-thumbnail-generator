import React, { forwardRef, useEffect, useRef } from 'react';
import { Layer, Text, Stage, Transformer, Rect } from 'react-konva';
import { CanvasStateWithColors, StrokeTypes } from '../../interfaces/common';
import { useMergeRefs, useOutsidePointerDown } from '@modern-kit/react';
import { KonvaCanvasWrapper } from './KonvaCanvas.styled';
import Konva from 'konva';

interface CanvasV2Props {
  canvasState: CanvasStateWithColors;
}

const getStrokeWidth = (strokeType: StrokeTypes) => {
  const strokeWidth = {
    None: 0,
    Thin: 1,
    Normal: 1.5,
    Thick: 2,
  };

  return strokeWidth[strokeType];
};

const KonvaCanvas = forwardRef(({ canvasState }: CanvasV2Props, ref) => {
  const { ref: outsideRef } = useOutsidePointerDown<any>(() => {
    transformerRef.current?.nodes([]);
  });

  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const textRef = useRef<Konva.Text>(null);
  const rectRef = useRef<Konva.Rect>(null);

  const handleDragEnd = () => {
    if (!stageRef.current) return;
    if (!textRef.current) return;

    const rect = stageRef.current.getPointerPosition();

    if (!rect) return;

    const x = rect.x;
    const y = rect.y;

    if (
      x < 0 ||
      y < 0 ||
      x > canvasState.canvasWidth ||
      y > canvasState.canvasHeight
    ) {
      const stageCenterX = canvasState.canvasWidth / 2;
      const stageCenterY = canvasState.canvasHeight / 2;

      textRef.current.rotation(0);
      const originRect = textRef.current.getClientRect();

      textRef.current.setPosition({
        x: stageCenterX - originRect.width / 2,
        y: stageCenterY - originRect.height / 2,
      });
    }
  };

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
  }, [canvasState.canvasWidth, canvasState.canvasHeight]);

  useEffect(() => {
    if (!rectRef.current) return;
    const withBlur = canvasState.isBlur && canvasState.selectedImage;

    if (withBlur) {
      rectRef.current.cache();
      rectRef.current.filters([Konva.Filters.Blur]);
      rectRef.current.blurRadius(10);
    } else {
      rectRef.current.clearCache();
    }
  }, [canvasState.selectedImage, canvasState.isBlur]);

  return (
    <KonvaCanvasWrapper ref={outsideRef}>
      <Stage
        ref={useMergeRefs(stageRef, ref)}
        width={canvasState.canvasWidth}
        height={canvasState.canvasHeight}>
        <Layer>
          <Rect
            ref={rectRef}
            onClick={handleStageClick}
            x={0}
            y={0}
            width={canvasState.canvasWidth}
            height={canvasState.canvasHeight}
            fillPatternImage={
              canvasState.selectedImage ? canvasState.selectedImage : undefined
            }
            fill={
              canvasState.selectedImage ? undefined : canvasState.bgColor.hex
            }
          />

          <Text
            ref={textRef}
            x={canvasState.canvasWidth / 2}
            y={canvasState.canvasHeight / 2}
            fontSize={30}
            fontFamily={canvasState.fontFamily}
            fill={canvasState.fontColor.hex}
            stroke={canvasState.strokeColor.hex}
            strokeWidth={getStrokeWidth(canvasState.fontStrokeType)}
            fontStyle={canvasState.fontStyle}
            lineHeight={canvasState.lineHeight}
            text={canvasState.value}
            onClick={handleTextClick}
            onDragEnd={handleDragEnd}
            verticalAlign="middle"
            onMouseEnter={() => (document.body.style.cursor = 'pointer')}
            onMouseLeave={() => (document.body.style.cursor = 'default')}
            align={canvasState.textAlign}
            draggable
          />

          <Transformer
            ref={transformerRef}
            anchorCornerRadius={10}
            borderStrokeWidth={2}
            centeredScaling
          />
        </Layer>
      </Stage>
    </KonvaCanvasWrapper>
  );
});

KonvaCanvas.displayName = 'KonvaCanvas';

export default KonvaCanvas;

import React, { forwardRef, useEffect, useRef } from 'react';
import { Layer as KonvaLayer, Stage, Rect } from 'react-konva';
import { CanvasState, LayerId } from '../../interfaces/common';
import { useMergeRefs } from '@modern-kit/react';
import * as S from './KonvaCanvas.styled';
import Konva from 'konva';
import TextNode from './TextNode';
import ImageNode from './ImageNode';

interface KonvaCanvasProps {
  canvasState: CanvasState;
  onSelectLayer: (id: LayerId | null) => void;
  onMoveLayer: (id: LayerId, x: number, y: number) => void;
  onTransformLayer: (
    id: LayerId,
    attrs: {
      x: number;
      y: number;
      scaleX: number;
      scaleY: number;
      rotation: number;
    },
  ) => void;
}

const KonvaCanvas = forwardRef(
  (
    {
      canvasState,
      onSelectLayer,
      onMoveLayer,
      onTransformLayer,
    }: KonvaCanvasProps,
    ref,
  ) => {
    const stageRef = useRef<Konva.Stage>(null);
    const rectRef = useRef<Konva.Rect>(null);

    const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
      // Click on background → deselect
      if (e.target === rectRef.current) {
        onSelectLayer(null);
      }
    };

    useEffect(() => {
      if (!rectRef.current) return;
      const withBlur = canvasState.isBlur && canvasState.backgroundImage;

      if (withBlur) {
        rectRef.current.cache();
        rectRef.current.filters([Konva.Filters.Blur]);
        rectRef.current.blurRadius(10);
      } else {
        rectRef.current.clearCache();
      }
    }, [canvasState.backgroundImage, canvasState.isBlur]);

    return (
      <S.KonvaCanvasWrapper>
        <Stage
          ref={useMergeRefs(stageRef, ref)}
          width={canvasState.canvasWidth}
          height={canvasState.canvasHeight}
          onClick={handleStageClick}
          onTap={handleStageClick}>
          <KonvaLayer>
            <Rect
              ref={rectRef}
              x={0}
              y={0}
              width={canvasState.canvasWidth}
              height={canvasState.canvasHeight}
              fillPatternImage={canvasState.backgroundImage ?? undefined}
              fill={
                canvasState.backgroundImage
                  ? undefined
                  : canvasState.bgColor.hex
              }
            />

            {canvasState.layers.map((layer) => {
              const isSelected =
                canvasState.selectedLayerId === layer.id;

              if (layer.type === 'text') {
                return (
                  <TextNode
                    key={layer.id}
                    layer={layer}
                    isSelected={isSelected}
                    onSelect={() => onSelectLayer(layer.id)}
                    onDragEnd={(x, y) => onMoveLayer(layer.id, x, y)}
                    onTransformEnd={(attrs) =>
                      onTransformLayer(layer.id, attrs)
                    }
                  />
                );
              }

              if (layer.type === 'image') {
                return (
                  <ImageNode
                    key={layer.id}
                    layer={layer}
                    isSelected={isSelected}
                    onSelect={() => onSelectLayer(layer.id)}
                    onDragEnd={(x, y) => onMoveLayer(layer.id, x, y)}
                    onTransformEnd={(attrs) =>
                      onTransformLayer(layer.id, attrs)
                    }
                  />
                );
              }

              return null;
            })}
          </KonvaLayer>
        </Stage>
      </S.KonvaCanvasWrapper>
    );
  },
);

KonvaCanvas.displayName = 'KonvaCanvas';

export default KonvaCanvas;

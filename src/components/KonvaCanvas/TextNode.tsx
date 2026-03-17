import React, { useRef, useEffect, useState } from 'react';
import { Text, Transformer } from 'react-konva';
import Konva from 'konva';
import { TextLayer } from '@interfaces/common';
import { StrokeTypes } from '@interfaces/common';

interface TextNodeProps {
  layer: TextLayer;
  isSelected: boolean;
  onSelect: () => void;
  onDragEnd: (x: number, y: number) => void;
  onTransformEnd: (attrs: {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
  }) => void;
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

const TextNode = ({
  layer,
  isSelected,
  onSelect,
  onDragEnd,
  onTransformEnd,
}: TextNodeProps) => {
  const textRef = useRef<Konva.Text>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Keep offset in sync so x,y acts as center point
  useEffect(() => {
    const node = textRef.current;
    if (!node) return;
    setOffset({ x: node.width() / 2, y: node.height() / 2 });
  }, [
    layer.value,
    layer.fontSize,
    layer.fontFamily,
    layer.fontStyle,
    layer.lineHeight,
    layer.scaleX,
    layer.scaleY,
  ]);

  useEffect(() => {
    if (isSelected && trRef.current && textRef.current) {
      trRef.current.nodes([textRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    onDragEnd(e.target.x(), e.target.y());
  };

  const handleTransformEnd = () => {
    const node = textRef.current;
    if (!node) return;
    onTransformEnd({
      x: node.x(),
      y: node.y(),
      scaleX: node.scaleX(),
      scaleY: node.scaleY(),
      rotation: node.rotation(),
    });
  };

  return (
    <>
      <Text
        ref={textRef}
        x={layer.x}
        y={layer.y}
        offsetX={offset.x}
        offsetY={offset.y}
        rotation={layer.rotation}
        scaleX={layer.scaleX}
        scaleY={layer.scaleY}
        fontSize={layer.fontSize}
        fontFamily={layer.fontFamily}
        fill={layer.fontColor.hex}
        stroke={layer.strokeColor.hex}
        strokeWidth={getStrokeWidth(layer.fontStrokeType)}
        fontStyle={layer.fontStyle}
        lineHeight={layer.lineHeight}
        text={layer.value}
        align={layer.textAlign}
        verticalAlign="middle"
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={handleDragEnd}
        onTransformEnd={handleTransformEnd}
        onMouseEnter={() => (document.body.style.cursor = 'pointer')}
        onMouseLeave={() => (document.body.style.cursor = 'default')}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          anchorCornerRadius={10}
          borderStrokeWidth={2}
          centeredScaling
        />
      )}
    </>
  );
};

export default TextNode;

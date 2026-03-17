import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import Konva from 'konva';
import { ImageLayer } from '@interfaces/common';

interface ImageNodeProps {
  layer: ImageLayer;
  isSelected: boolean;
  canvasWidth: number;
  canvasHeight: number;
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

const ImageNode = ({
  layer,
  isSelected,
  canvasWidth,
  canvasHeight,
  onSelect,
  onDragEnd,
  onTransformEnd,
}: ImageNodeProps) => {
  const imageRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (isSelected && trRef.current && imageRef.current) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    const node = e.target;
    const rect = node.getClientRect();
    const isOutside =
      rect.x + rect.width < 0 ||
      rect.y + rect.height < 0 ||
      rect.x > canvasWidth ||
      rect.y > canvasHeight;

    if (isOutside) {
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;
      node.position({ x: centerX, y: centerY });
      onDragEnd(centerX, centerY);
    } else {
      onDragEnd(node.x(), node.y());
    }
  };

  const handleTransformEnd = () => {
    const node = imageRef.current;
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
      <Image
        ref={imageRef}
        image={layer.image}
        x={layer.x}
        y={layer.y}
        offsetX={layer.width / 2}
        offsetY={layer.height / 2}
        width={layer.width}
        height={layer.height}
        rotation={layer.rotation}
        scaleX={layer.scaleX}
        scaleY={layer.scaleY}
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

export default ImageNode;

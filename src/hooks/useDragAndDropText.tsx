import React, { useState } from 'react';

const useDragAndDropText = (canvasWidth: number, canvasHeight: number) => {
  const [dragAndDropTextData, setDragAndDropTextData] = useState({
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
  });

  const handleCanvasMouseDown = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setDragAndDropTextData({
      offsetX: x,
      offsetY: y,
      isDragging: true,
    });
  };

  const handleCanvasMouseMove = (e: any) => {
    const { isDragging } = dragAndDropTextData;

    if (isDragging) {
      const rect = e.target.getBoundingClientRect();
      const dx = e.clientX - rect.left;
      const dy = e.clientY - rect.top;

      setDragAndDropTextData({
        ...dragAndDropTextData,
        offsetX: dx,
        offsetY: dy,
      });
    }
  };

  const handleCanvasMouseUp = () => {
    setDragAndDropTextData({
      ...dragAndDropTextData,
      isDragging: false,
    });
  };

  const handleCanvasMouseLeave = () => {
    const { isDragging } = dragAndDropTextData;

    if (isDragging) {
      setDragAndDropTextData({
        offsetX: canvasWidth / 2,
        offsetY: canvasHeight / 2,
        isDragging: false,
      });
    }
  };

  const handleCanvasOffsetReset = () => {
    setDragAndDropTextData({
      ...dragAndDropTextData,
      offsetX: 0,
      offsetY: 0,
    });
  };

  return {
    dragAndDropTextData,
    handleCanvasMouseDown,
    handleCanvasMouseMove,
    handleCanvasMouseUp,
    handleCanvasMouseLeave,
    handleCanvasOffsetReset,
  };
};

export default useDragAndDropText;

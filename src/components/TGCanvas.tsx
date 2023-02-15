import React, { useEffect } from 'react';

interface TGCanvasProps {
  bgColor: string;
  fontColor: string;
  width: number;
  height: number;
  text: string;
}

const TGCanvas = React.forwardRef(
  ({ width, height, text, bgColor, fontColor }: TGCanvasProps, ref: any) => {
    const setFont = (canvas: HTMLCanvasElement, text: string, args: any) => {
      const ctx = canvas.getContext('2d');
      const lines = text.split('\n');

      if (ctx) {
        const { color, size, font } = args;
        ctx.font = `${size}px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lineHeight = size * 1.2;

        lines.forEach((line, idx) => {
          const x = canvas.width / 2;
          const y =
            canvas.height / 2 -
            ((lines.length - 1) * lineHeight) / 2 +
            idx * lineHeight;

          ctx.fillStyle = color;
          ctx.fillText(line, x, y);
        });
      }
    };

    useEffect(() => {
      const canvas = ref.current;

      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        setFont(canvas, text, {
          color: fontColor,
          size: 40,
          font: 'Arial',
        });
      }
    }, [text, width, height, bgColor, fontColor]);

    return <canvas ref={ref} width={width} height={height} />;
  }
);

TGCanvas.displayName = 'Search';

export default TGCanvas;

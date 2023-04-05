import { Color } from 'react-color-palette';

export type StrokeTypes = 'None' | 'Thin' | 'Normal' | 'Thick';

export type ImageTypes = 'png' | 'jpg' | 'webp';

export interface CanvasState {
  value: string;
  fontSize: string;
  fontStrokeType: StrokeTypes;
  fontFamily: string;
  canvasWidth: string;
  canvasHeight: string;
  imageType: ImageTypes;
  lineHeight: string;
  angle: string;
  isBlur: boolean;
  selectedImage: HTMLImageElement | null;
  isBlockEvent: boolean;
}

export interface CanvasStateWithColors extends CanvasState {
  bgColor: Color;
  fontColor: Color;
  strokeColor: Color;
}

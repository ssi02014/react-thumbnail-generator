import { ComponentProps } from 'react';
import { ColorPicker } from 'react-color-palette';

export type Color = ComponentProps<typeof ColorPicker>['color'];

export type StrokeTypes = 'None' | 'Thin' | 'Normal' | 'Thick';

export type TextAlign = 'center' | 'start' | 'end';

export interface CanvasState {
  value: string;
  fontSize: string;
  fontStrokeType: StrokeTypes;
  fontFamily: string;
  canvasWidth: string;
  canvasHeight: string;
  imageType: 'png' | 'jpg' | 'webp';
  lineHeight: string;
  angle: string;
  isBlur: boolean;
  textAlign: TextAlign;
  selectedImage: HTMLImageElement | null;
  isBlockEvent: boolean;
}

export interface CanvasStateWithColors extends CanvasState {
  bgColor: Color;
  fontColor: Color;
  strokeColor: Color;
}

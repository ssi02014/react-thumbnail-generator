import { ComponentProps } from 'react';
import { ColorPicker } from 'react-color-palette';

export type Color = ComponentProps<typeof ColorPicker>['color'];

export type StrokeTypes = 'None' | 'Thin' | 'Normal' | 'Thick';

export type TextAlign = 'center' | 'left' | 'right';

export interface CanvasState {
  value: string;
  fontSize: number;
  fontStrokeType: StrokeTypes;
  fontFamily: string;
  canvasWidth: number;
  canvasHeight: number;
  imageType: 'png' | 'jpg' | 'webp';
  fontStyle: 'normal' | 'bold' | 'italic' | 'underline' | 'overline';
  lineHeight: number;
  angle: string;
  isBlur: boolean;
  textAlign: TextAlign;
  selectedImage: HTMLImageElement | undefined;
  isBlockEvent: boolean;
}

export interface CanvasStateWithColors extends CanvasState {
  bgColor: Color;
  fontColor: Color;
  strokeColor: Color;
}

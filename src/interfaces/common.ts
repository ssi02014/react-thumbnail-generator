import { ComponentProps } from 'react';
import { ColorPicker } from 'react-color-palette';

export type Color = ComponentProps<typeof ColorPicker>['color'];

export type StrokeTypes = 'None' | 'Thin' | 'Normal' | 'Thick';

export type TextAlign = 'center' | 'left' | 'right';

export type LayerId = string;

export interface BaseLayer {
  id: LayerId;
  type: 'text' | 'image';
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export interface TextLayer extends BaseLayer {
  type: 'text';
  value: string;
  fontSize: number;
  fontFamily: string;
  fontStyle: 'normal' | 'bold' | 'italic';
  fontColor: Color;
  strokeColor: Color;
  fontStrokeType: StrokeTypes;
  lineHeight: number;
  textAlign: TextAlign;
}

export interface ImageLayer extends BaseLayer {
  type: 'image';
  image: HTMLImageElement;
  width: number;
  height: number;
}

export type Layer = TextLayer | ImageLayer;

export interface CanvasState {
  canvasWidth: number;
  canvasHeight: number;
  imageType: 'png' | 'jpg' | 'webp';
  bgColor: Color;
  backgroundImage: HTMLImageElement | undefined;
  isBlur: boolean;
  isBlockEvent: boolean;
  layers: Layer[];
  selectedLayerId: LayerId | null;
}

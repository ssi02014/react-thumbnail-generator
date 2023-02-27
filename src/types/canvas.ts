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
  angle: number;
  isBlur: boolean;
  selectedImage: HTMLImageElement | null;
}

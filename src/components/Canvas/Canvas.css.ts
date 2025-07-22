import { style } from '@vanilla-extract/css';

export const canvasWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const canvas = style({
  cursor: 'pointer',
});

import { createVar, style } from '@vanilla-extract/css';

export const backgroundSizeVar = createVar();

export const rangeInputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const labelRangeContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const label = style({
  fontSize: '0.7rem',
  color: '#969696',
  height: '16px',
});

export const rangeInput = style({
  appearance: 'none',
  width: '150px',
  height: '8px',
  background: 'rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  opacity: '0.7',
  backgroundImage: 'linear-gradient(#3264b5, #3264b5)',
  backgroundSize: backgroundSizeVar,
  backgroundRepeat: 'no-repeat',
  WebkitAppearance: 'none',
  selectors: {
    '&:hover': {
      opacity: '1',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      background: '#275194',
      cursor: 'pointer',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '25px',
      height: '25px',
      background: '#3264b5',
      cursor: 'pointer',
    },
  },
});

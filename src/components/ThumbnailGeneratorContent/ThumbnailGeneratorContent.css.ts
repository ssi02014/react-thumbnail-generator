import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const thumbnailGeneratorOpenButton = recipe({
  base: {
    padding: 0,
    backgroundColor: 'transparent',
    position: 'fixed',
    cursor: 'pointer',
    border: 'none',
    fontSize: '0.5rem',
    color: '#ffffff',
    transition: '0.2s',
    zIndex: '9999',
    selectors: {
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
  variants: {
    iconPosition: {
      ['top-left']: {
        top: '20px',
        left: '20px',
      },
      ['top-right']: {
        top: '20px',
        right: '20px',
      },
      ['bottom-left']: {
        bottom: '20px',
        left: '20px',
      },
      ['bottom-right']: {
        bottom: '20px',
        right: '20px',
      },
    },
  },
});

export const thumbnailGeneratorTextArea = style({
  width: '100%',
  height: 'auto',
  padding: '5px 10px',
  border: '1px solid #cccccc',
  borderRadius: '5px',
  resize: 'none',
  outline: 'none',
  fontSize: '1.1rem',
  selectors: {
    '&:focus, &:hover': {
      border: '1px solid #0e1b30',
    },
    '&::placeholder': {
      fontSize: '1rem',
      color: '#cccccc',
    },
  },
});

export const thumbnailGeneratorButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

export const thumbnailGeneratorButton = style({
  backgroundColor: '#192841',
  color: '#fff',
  width: '300px',
  padding: '12px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
});

export const thumbnailGeneratorControllerWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
  gap: '10px',
});

export const thumbnailGeneratorTextareaWrapper = style({
  padding: '10px 10px 0px 10px',
});

export const thumbnailGeneratorIconControllerWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#fcfcfc',
  borderBottom: '1px solid #ebedf2',
  padding: '8px 10px',
  borderRadius: '5px',
});

globalStyle(`${thumbnailGeneratorControllerWrapper} > input[type='range']`, {
  marginTop: '20px',
});

import { style } from '@vanilla-extract/css';

export const fileInputWrapper = style({
  background: '#fff',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '1px solid #cccccc',
  padding: '4px 5px',
  selectors: {
    '&:hover': {
      border: '1px solid #0e1b30',
    },
  },
});

export const fileInput = style({
  display: 'none',
});

export const fileInputLabel = style({
  cursor: 'pointer',
  margin: '0',
  width: '20px',
  height: '20px',
});

export const fileInputImg = style({
  width: '100%',
  height: '100%',
});

import { createVar, style } from '@vanilla-extract/css';

export const widthVar = createVar();

export const textInputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '50px',
});

export const textInputLabel = style({
  fontSize: '0.7rem',
  color: '#969696',
  height: '16px',
  lineHeight: '17px',
});

export const textInput = style({
  border: '1px solid #cccccc',
  borderRadius: '5px',
  padding: '6px 12px',
  fontSize: '0.9rem',
  outline: 'none',
  marginTop: '1px',
  width: widthVar,
  selectors: {
    '&:disabled': {
      backgroundColor: '#f3f3f3',
    },
  },
});

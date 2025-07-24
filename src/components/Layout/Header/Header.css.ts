import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
  position: 'sticky',
  top: 0,
  padding: '8px',
  borderBottom: '1px solid rgb(243, 243, 243)',
});

export const headerButton = style({
  cursor: 'pointer',
  transition: 'transform 0.2s',
  selectors: {
    '&:hover': {
      transform: 'rotate(90deg)',
    },
  },
});

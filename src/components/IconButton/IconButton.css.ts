import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  padding: '4px 5px',
  background: '#fff',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1px solid #cccccc',
  selectors: {
    '&:hover': {
      border: '1px solid #0e1b30',
    },
  },
});

export const iconButton = styleVariants({
  default: [base],
  isOpen: [
    base,
    {
      border: '1px solid #0e1b30',
      selectors: {
        '&:hover': {
          border: '1px solid #0e1b30',
        },
      },
    },
  ],
});

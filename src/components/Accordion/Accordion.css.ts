import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const accordionWrapper = style({
  margin: '0 auto',
  width: '100%',
});

export const accordionTopContainer = style({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: '0.3s',
  padding: '0 20px',
  height: '39px',
});

export const accordionTitle = style({
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  textAlign: 'start',
  fontSize: '1rem',
  color: '#111',
  margin: 0,
  selectors: {
    '&:hover': {
      color: '#3264b5',
    },
  },
});

export const accordionPanelContainer = recipe({
  base: {
    backgroundColor: '#fff',
    transition: 'all 0.2s linear',
  },
  variants: {
    isOpen: {
      true: {
        maxHeight: '200px',
        overflow: 'visible',
      },
      false: {
        maxHeight: '0px',
        overflow: 'hidden',
      },
    },
  },
});

import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const bodyWrapper = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    minWidth: '600px',
    borderRadius: '7px',
    boxShadow: '1px 1px 10px #cccccc',
    zIndex: '100',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    fontFamily: 'Arial',
  },
  variants: {
    modalPosition: {
      left: {
        bottom: 0,
        left: 0,
      },
      right: {
        bottom: 0,
        right: 0,
      },
      center: {
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 0,
      },
    },
  },
});

globalStyle(`${bodyWrapper} > *`, {
  boxSizing: 'border-box',
});

export const innerWrapper = style({
  flexDirection: 'column',
  width: '100%',
  maxHeight: 'calc(100vh - 45px)',
  overflowY: 'scroll',
  overflowX: 'auto',
});

export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: '20px',
});

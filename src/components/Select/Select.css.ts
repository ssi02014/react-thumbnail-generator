import { style, styleVariants } from '@vanilla-extract/css';

export const selectWrapper = style({
  position: 'relative',
  minWidth: '120px',
  maxWidth: '120px',
});

export const selectLabel = style({
  fontSize: '0.7rem',
  color: '#969696',
});

const baseSelectInput = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1px solid #cccccc',
  borderRadius: '5px',
  padding: '6px 12px',
  selectors: {
    '&:hover': {
      border: '1px solid #0e1b30',
    },
  },
});

export const selectInput = styleVariants({
  default: [
    baseSelectInput,
    {
      border: '1px solid #cccccc',
    },
  ],
  isOpen: [
    baseSelectInput,
    {
      border: '1px solid #0e1b30',
    },
  ],
});

export const selectInputText = style({
  margin: 0,
  fontSize: '0.9rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const selectItemContainer = style({
  position: 'absolute',
  bottom: '35px',
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: '0 0 3px 0.5px #afafaf',
  overflowY: 'scroll',
  listStyle: 'none',
  padding: '0',
  maxHeight: '200px',
  zIndex: '1000',
});

const baseSelectListItem = style({
  cursor: 'pointer',
  padding: '10px 15px',
  fontSize: '0.9rem',
  selectors: {
    '&:hover': {
      backgroundColor: '#ededed',
    },
  },
});

export const selectListItem = styleVariants({
  default: [
    baseSelectListItem,
    {
      backgroundColor: '#fff',
    },
  ],
  active: [
    baseSelectListItem,
    {
      backgroundColor: '#ededed',
    },
  ],
});

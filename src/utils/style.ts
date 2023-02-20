export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type Size = 'small' | 'medium' | 'large';

export const getPosition = (position: Position) => {
  switch (position) {
    case 'top-left':
      return `
        top: 20px;
        left: 20px;
      `;
    case 'top-right':
      return `
        top: 20px;
        right: 20px;
      `;
    case 'bottom-left':
      return `
        bottom: 20px;
        left: 20px;
      `;
    default:
      return `
      bottom: 20px;
      right: 20px;
    `;
  }
};

export const getIconSize = (size: Size) => {
  switch (size) {
    case 'small':
      return 24;
    case 'medium':
      return 32;
    default:
      return 40;
  }
};

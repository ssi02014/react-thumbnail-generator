export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type Size = 'small' | 'medium' | 'large';

export const getIconPosition = (position: [number, number, number, number]) => {
  const [top, right, bottom, left] = position;

  return `
    top: ${top ? `${top}px` : ''};
    right: ${right ? `${right}px` : ''};
    bottom: ${bottom ? `${bottom}px` : ''};
    left: ${left ? `${left}px` : ''};
  `;
};

export const getModalPosition = (position: 'left' | 'right' | 'center') => {
  switch (position) {
    case 'left':
      return `
        bottom: 20px;
        left: 20px;
      `;
    case 'right':
      return `
        bottom: 20px;
        right: 20px;
      `;
    default:
      return `
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
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

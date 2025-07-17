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
        bottom: 0;
        left: 0;
      `;
    case 'right':
      return `
        bottom: 0;
        right: 0;
      `;
    default:
      return `
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
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

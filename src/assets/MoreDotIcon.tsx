import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
}

const MoreDotIcon = ({
  width = 24,
  height = 24,
  fill = '#000000',
  viewBox = `0 0 24 24`,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="6" r="1.5" fill={fill} />
      <circle cx="12" cy="12" r="1.5" fill={fill} />
      <circle cx="12" cy="18" r="1.5" fill={fill} />
    </svg>
  );
};

export default MoreDotIcon;

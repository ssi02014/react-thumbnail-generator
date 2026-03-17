import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const AddImageIcon = ({
  width = 20,
  height = 20,
  fill = '#09244B',
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke={fill}
      strokeWidth="2"
    />
    <circle cx="8.5" cy="8.5" r="1.5" fill={fill} />
    <path
      d="M3 16L8 11L13 16"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L17 11L21 15"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddImageIcon;

import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const AddTextIcon = ({
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
    <path
      d="M5 7V4H19V7"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4V20M12 20H9M12 20H15"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddTextIcon;

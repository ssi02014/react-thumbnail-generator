import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const RedoIcon = ({ width = 20, height = 20, fill = '#09244B' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.6607 4.46777C16.7318 2.93219 14.2641 2 11.5858 2C5.95066 2 1.38257 6.47715 1.38257 12C1.38257 17.5228 5.95066 22 11.5858 22C16.4799 22 20.5811 18.6296 21.5552 14.1623"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 2V7.5H15.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RedoIcon;

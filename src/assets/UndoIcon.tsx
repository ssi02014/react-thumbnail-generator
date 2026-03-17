import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const UndoIcon = ({ width = 20, height = 20, fill = '#09244B' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.33929 4.46777C7.26821 2.93219 9.73588 2 12.4142 2C18.0493 2 22.6174 6.47715 22.6174 12C22.6174 17.5228 18.0493 22 12.4142 22C7.52015 22 3.41891 18.6296 2.44482 14.1623"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 2V7.5H8.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UndoIcon;

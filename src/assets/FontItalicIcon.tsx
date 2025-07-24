import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
}

const FontItalicIcon = ({
  width = 24,
  height = 24,
  fill = '#000000',
  viewBox = '0 0 24 24',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>ic_fluent_text_italic_24_filled</title>
      <desc>Created with Sketch.</desc>
      <g
        id="🔍-System-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g id="ic_fluent_text_italic_24_filled" fill={fill} fillRule="nonzero">
          <path
            d="M10.6485851,18.5 L14.4957557,18.5 C15.047766,18.5 15.4952856,18.9478705 15.4952856,19.5 C15.4952856,20.0521295 15.047766,20.5 14.4957557,20.5 L4.99646479,20.5 C4.44472052,20.5 4,20.0524021 4,19.5 C4,18.9475979 4.44472052,18.5 4.99646479,18.5 L8.50564567,18.5 L13.3322324,5.9993837 L9.99693298,5.9993837 C9.44485457,5.9993837 8.99693298,5.55175319 8.99693298,4.99969185 C8.99693298,4.44763051 9.44485457,4 9.99693298,4 L18.5004701,4 C19.0525073,4 19.5,4.44758938 19.5,4.99969185 C19.5,5.55179432 19.0525073,5.9993837 18.5004701,5.9993837 L15.4751718,5.9993837 L10.6485851,18.5 Z"
            id="🎨-Color"></path>
        </g>
      </g>
    </svg>
  );
};

export default FontItalicIcon;

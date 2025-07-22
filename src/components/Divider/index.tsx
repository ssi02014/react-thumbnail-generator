import React, { CSSProperties, useMemo } from 'react';

interface DividerProps {
  width?: CSSProperties['width'];
  height: CSSProperties['height'];
  color: string;
  margin?: [number, number, number, number];
}

const Divider = ({ width = '100%', height, color, margin }: DividerProps) => {
  const [mt, mr, mb, ml] = margin ?? [0, 0, 0, 0];

  const style = useMemo(
    () => ({
      width,
      height,
      backgroundColor: color,
      marginTop: mt,
      marginRight: mr,
      marginBottom: mb,
      marginLeft: ml,
    }),
    [],
  );

  return <div style={style} />;
};

export default Divider;

import React, { useMemo } from 'react';

interface DividerProps {
  height: number;
  color: string;
  margin: [number, number, number, number];
}

const Divider = ({ height, color, margin }: DividerProps) => {
  const [mt, mr, mb, ml] = margin;

  const style = useMemo(
    () => ({
      height,
      backgroundColor: color,
      marginTop: mt,
      marginRight: mr,
      marginBottom: mb,
      marginLeft: ml,
    }),
    []
  );

  return <div style={style} />;
};

export default Divider;

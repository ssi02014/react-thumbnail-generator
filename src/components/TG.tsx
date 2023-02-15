import React, { useRef, useState } from 'react';
import {
  TGBodyWrapper,
  TGButtonContainer,
  TGContentWrapper,
  TGTextarea,
} from './TG.styled';
import TGCanvas from './TGCanvas';
import TGHeader from './TGHeader';

interface TGProps {
  onToggle: () => void;
}
const TG = ({ onToggle }: TGProps) => {
  const [text, setText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadCanvas = () => {
    const url = canvasRef.current?.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url as string;
    link.setAttribute('download', `thumbnail.png`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TGBodyWrapper>
      <TGHeader onToggle={onToggle} />
      <TGContentWrapper>
        <TGCanvas
          ref={canvasRef}
          bgColor="black"
          fontColor="#fff"
          width={700}
          height={400}
          text={text}
        />
        <TGTextarea value={text} onChange={(e) => setText(e.target.value)} />
        <TGButtonContainer>
          <button onClick={downloadCanvas}>다운로드</button>
        </TGButtonContainer>
      </TGContentWrapper>
    </TGBodyWrapper>
  );
};

export default TG;

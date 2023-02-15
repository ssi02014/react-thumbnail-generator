import React, { useRef, useState } from 'react';
import {
  TGBodyWrapper,
  TGButtonContainer,
  TGContentWrapper,
  TGControllerWrapper,
  TGTextarea,
} from './TG.styled';
import TGCanvas from './TGCanvas';
import TGHeader from './TGHeader';
import { useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import TGColorPicker from './TGColorPicker';
import { AiOutlineBgColors, AiOutlineFontColors } from 'react-icons/ai';

interface TGProps {
  onToggle: () => void;
}
const TG = ({ onToggle }: TGProps) => {
  const [text, setText] = useState('Simple Thumbnail Generator 😁');
  const [bgColor, setBgColor] = useColor('hex', '#121212');
  const [fontColor, setFontColor] = useColor('hex', '#fff');

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
          bgColor={bgColor}
          fontColor={fontColor}
          width={700}
          height={400}
          text={text}
        />
        <TGControllerWrapper>
          <TGTextarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="THUMBNAIL TEXT"
          />
        </TGControllerWrapper>

        <TGControllerWrapper>
          <TGColorPicker color={bgColor} setColor={setBgColor}>
            <AiOutlineBgColors size={24} />
          </TGColorPicker>
          <TGColorPicker color={fontColor} setColor={setFontColor}>
            <AiOutlineFontColors size={24} />
          </TGColorPicker>
        </TGControllerWrapper>

        <TGButtonContainer>
          <button onClick={downloadCanvas}>DOWNLOAD</button>
        </TGButtonContainer>
      </TGContentWrapper>
    </TGBodyWrapper>
  );
};

export default TG;

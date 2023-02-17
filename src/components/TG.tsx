import React, { ChangeEvent, useRef, useState } from 'react';
import {
  TGBodyWrapper,
  TGButtonContainer,
  TGContentWrapper,
  TGControllerWrapper,
  TGInnerWrapper,
  TGTextarea,
} from './TG.styled';
import TGCanvas from './TGCanvas';
import TGHeader from './TGHeader';
import { useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import TGColorPicker from './TGColorPicker';
import TGSelect from './TGSelect';
import TGSelectItem from './TGSelectItem';
import TGInput from './TGInput';
import TGIcon from './TGIcon';
import color from '../assets/color.png';
import font from '../assets/font.png';

interface TGProps {
  onToggle: () => void;
}

const fontSizes = [
  '10px',
  '20px',
  '30px',
  '40px',
  '50px',
  '60px',
  '70px',
  '80px',
  '90px',
  '100px',
  '120px',
  '140px',
  '160px',
  '180px',
  '200px',
];

const TG = ({ onToggle }: TGProps) => {
  const [text, setText] = useState('Simple Thumbnail Generator 😁');
  const [bgColor, setBgColor] = useColor('hex', '#121212');
  const [fontColor, setFontColor] = useColor('hex', '#fff');
  const [fontSize, setFontSize] = useState('30px');
  const [canvasSize, setCanvasSize] = useState({
    width: '700',
    height: '400',
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const LimitWidthSize = window.innerWidth - 70;

  const onChangeFontSize = (value: string) => {
    setFontSize(value);
  };

  const onChangeCanvasSize = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const { name, value } = e.target;
    const replacedValue = value.replace(regex, '');

    if (name === 'width' && +replacedValue > LimitWidthSize) {
      return alert('Please set it smaller than Limit Width Size.');
    }

    setCanvasSize({
      ...canvasSize,
      [name]: replacedValue,
    });
  };

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
      <TGInnerWrapper>
        <TGHeader onToggle={onToggle} />
        <TGContentWrapper>
          <TGCanvas
            ref={canvasRef}
            bgColor={bgColor}
            fontColor={fontColor}
            fontSize={fontSize}
            width={canvasSize.width}
            height={canvasSize.height}
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
            <TGInput
              name="width"
              label="Thumbnail Width"
              value={canvasSize.width}
              onChange={onChangeCanvasSize}
            />
            <TGInput
              name="height"
              label="Thumbnail Height"
              value={canvasSize.height}
              onChange={onChangeCanvasSize}
            />
          </TGControllerWrapper>
          <TGControllerWrapper>
            <TGSelect
              label="Font Size"
              value={fontSize}
              onChange={onChangeFontSize}>
              {fontSizes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
          </TGControllerWrapper>
          <TGControllerWrapper>
            <TGColorPicker color={bgColor} setColor={setBgColor}>
              <TGIcon src={color} width={20} height={20} />
            </TGColorPicker>
            <TGColorPicker color={fontColor} setColor={setFontColor}>
              <TGIcon src={font} width={20} height={20} />
            </TGColorPicker>
          </TGControllerWrapper>
          <TGButtonContainer>
            <button onClick={downloadCanvas}>DOWNLOAD</button>
          </TGButtonContainer>
        </TGContentWrapper>
      </TGInnerWrapper>
    </TGBodyWrapper>
  );
};

export default TG;

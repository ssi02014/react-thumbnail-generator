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
import { Color, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import TGColorPicker from './TGColorPicker';
import TGSelect from './TGSelect';
import TGSelectItem from './TGSelectItem';
import TGInputText from './TGInputText';
import TGIcon from './TGIcon';
import color from '../assets/color.png';
import font from '../assets/font.png';
import stroke from '../assets/stroke.png';
import { Position } from '../utils/style';
import TGInputFile from './TGInputFile';

interface TGProps {
  additionalFontFamily?: string[];
  position: Position;
  onToggle: () => void;
}

type StrokeTypes = 'None' | 'Thin' | 'Normal' | 'Thick';

const fontFamilies = [
  'Arial',
  'monospace',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'Verdana',
];
const strokeTypes = ['None', 'Thin', 'Normal', 'Thick'];
const imageTypes = ['png', 'jpg', 'webp'];
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

const TG = ({ additionalFontFamily = [], position, onToggle }: TGProps) => {
  const [text, setText] = useState('Simple Thumbnail Generator 😁');
  const [bgColor, setBgColor] = useColor('hex', '#192841');
  const [fontColor, setFontColor] = useColor('hex', '#fff');
  const [fontSize, setFontSize] = useState('30px');
  const [fontStrokeType, setFontStrokeType] = useState('None');
  const [strokeColor, setStrokeColor] = useColor('hex', '#121212');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [canvasSize, setCanvasSize] = useState({
    width: '700',
    height: '400',
  });
  const [imageType, setImageType] = useState('png');
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement | null>(
    null
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const LimitWidthSize = window.innerWidth - 70;
  const onChangeSelectValue = (
    type: 'imageType' | 'fontSize' | 'fontStrokeType' | 'fontFamily',
    value: string
  ) => {
    const selectType = {
      imageType: setImageType,
      fontSize: setFontSize,
      fontStrokeType: setFontStrokeType,
      fontFamily: setFontFamily,
    };

    const setState = selectType[type];
    setState(value);
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

  const onChangeBgColor = (color: Color) => {
    setSelectedImage(null);
    setBgColor(color);
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const img = new Image();

      img.src = URL.createObjectURL(files[0]);
      img.onload = async () => {
        if (img.width > LimitWidthSize) {
          return alert(
            'Please register a picture smaller than Limit Width Size.'
          );
        }

        setSelectedImage(img);
        setCanvasSize({
          width: `${img.width}`,
          height: `${img.height}`,
        });
      };
    }
  };

  const downloadCanvas = () => {
    const url = canvasRef.current?.toDataURL(`image/${imageType}`);
    const link = document.createElement('a');

    link.href = url as string;
    link.setAttribute('download', `thumbnail.${imageType}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fontFamilyOptions = [...additionalFontFamily, ...fontFamilies];

  return (
    <TGBodyWrapper position={position}>
      <TGHeader onToggle={onToggle} />
      <TGInnerWrapper>
        <TGContentWrapper>
          <TGCanvas
            ref={canvasRef}
            bgColor={bgColor}
            fontFamily={fontFamily}
            fontColor={fontColor}
            fontSize={fontSize}
            width={canvasSize.width}
            height={canvasSize.height}
            fontStrokeType={fontStrokeType as StrokeTypes}
            strokeColor={strokeColor}
            text={text}
            selectedImage={selectedImage}
          />
          <TGControllerWrapper>
            <TGInputFile onChangeImage={onChangeImage} />
            <TGColorPicker color={bgColor} setColor={onChangeBgColor}>
              <TGIcon src={color} width={20} height={20} />
            </TGColorPicker>
            <TGColorPicker color={fontColor} setColor={setFontColor}>
              <TGIcon src={font} width={20} height={20} />
            </TGColorPicker>
            <TGColorPicker color={strokeColor} setColor={setStrokeColor}>
              <TGIcon src={stroke} width={20} height={20} />
            </TGColorPicker>
          </TGControllerWrapper>
          <TGControllerWrapper>
            <TGTextarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="THUMBNAIL TEXT"
            />
          </TGControllerWrapper>

          <TGControllerWrapper>
            <TGInputText
              name="width"
              label="Thumbnail Width"
              value={canvasSize.width}
              onChange={onChangeCanvasSize}
            />
            <TGInputText
              name="height"
              label="Thumbnail Height"
              value={canvasSize.height}
              onChange={onChangeCanvasSize}
            />
          </TGControllerWrapper>
          <TGControllerWrapper>
            <TGSelect
              label="Font Family"
              value={fontFamily}
              onChange={(value) => onChangeSelectValue('fontFamily', value)}>
              {fontFamilyOptions.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
            <TGSelect
              label="Font Size"
              value={fontSize}
              onChange={(value) => onChangeSelectValue('fontSize', value)}>
              {fontSizes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
            <TGSelect
              label="Font Stroke"
              value={fontStrokeType}
              onChange={(value) =>
                onChangeSelectValue('fontStrokeType', value)
              }>
              {strokeTypes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
          </TGControllerWrapper>
          <TGControllerWrapper>
            <TGSelect
              label="Image Type"
              value={imageType}
              onChange={(value) => onChangeSelectValue('imageType', value)}>
              {imageTypes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
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

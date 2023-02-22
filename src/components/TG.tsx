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
import TGColorPicker from './TGColorPicker';
import TGSelect from './TGSelect';
import TGSelectItem from './TGSelectItem';
import TGInputText from './TGInputText';
import TGIcon from './TGIcon';
import { fill, font, stroke } from '../assets/icons';
import { Position } from '../utils/style';
import TGInputFile from './TGInputFile';
import Divider from './Divider';

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
  const [fontAxisAndAngle, setFontAxisAndAngle] = useState({
    xAxis: '0',
    yAxis: '0',
    angle: '0',
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const LimitWidthSize = window.innerWidth - 70;
  const LimitHeightSize = 5000;

  const onChangeSelectValue = (
    type: 'imageType' | 'fontSize' | 'fontStrokeType' | 'fontFamily',
    value: string
  ) => {
    const setStateType = {
      imageType: setImageType,
      fontSize: setFontSize,
      fontStrokeType: setFontStrokeType,
      fontFamily: setFontFamily,
    };

    const setState = setStateType[type];
    setState(value);
  };

  const onChangeCanvasSize = (
    e: ChangeEvent<HTMLInputElement>,
    type: 'canvasSize' | 'fontAxis'
  ) => {
    const regex = /[^0-9]/g;
    const { name, value } = e.target;
    const replacedValue = value.replace(regex, (match, idx) => {
      if (!idx && match === '-') {
        return '-';
      }
      return '';
    });

    if (name === 'width' && +replacedValue > LimitWidthSize) {
      return alert(`Please set the width smaller than ${LimitWidthSize}px`);
    }
    if (name === 'height' && +replacedValue > LimitHeightSize) {
      return alert('Please set the height smaller than 5000px');
    }

    const setStateType = {
      canvasSize: setCanvasSize,
      fontAxis: setFontAxisAndAngle,
    };

    const setState = setStateType[type];

    setState((prev: any) => ({
      ...prev,
      [name]: replacedValue,
    }));
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
            canvasSize={canvasSize}
            fontStrokeType={fontStrokeType as StrokeTypes}
            fontAxisAndAngle={fontAxisAndAngle}
            strokeColor={strokeColor}
            text={text}
            selectedImage={selectedImage}
          />

          <TGControllerWrapper>
            <TGInputFile width={20} height={20} onChangeImage={onChangeImage} />
            <TGColorPicker color={bgColor} setColor={onChangeBgColor}>
              <TGIcon src={fill} width={20} height={20} />
            </TGColorPicker>
            <TGColorPicker color={fontColor} setColor={setFontColor}>
              <TGIcon src={font} width={20} height={20} />
            </TGColorPicker>
            <TGColorPicker color={strokeColor} setColor={setStrokeColor}>
              <TGIcon src={stroke} width={20} height={20} />
            </TGColorPicker>
          </TGControllerWrapper>

          <TGControllerWrapper>
            <TGInputText
              name="xAxis"
              label="Font x-axis"
              value={fontAxisAndAngle.xAxis}
              onChange={(e) => onChangeCanvasSize(e, 'fontAxis')}
            />
            <TGInputText
              name="yAxis"
              label="Font y-axis"
              value={fontAxisAndAngle.yAxis}
              onChange={(e) => onChangeCanvasSize(e, 'fontAxis')}
            />
            <TGInputText
              name="angle"
              label="Font Angle"
              value={fontAxisAndAngle.angle}
              maxLength={4}
              onChange={(e) => onChangeCanvasSize(e, 'fontAxis')}
            />
          </TGControllerWrapper>

          <TGControllerWrapper>
            <TGTextarea
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="THUMBNAIL TEXT"
            />
          </TGControllerWrapper>

          <Divider color="#f3f3f3" height={10} margin={[20, 0, 10, 0]} />

          <TGControllerWrapper>
            <TGInputText
              name="width"
              label="Thumbnail Width"
              value={canvasSize.width}
              onChange={(e) => onChangeCanvasSize(e, 'canvasSize')}
            />
            <TGInputText
              name="height"
              label="Thumbnail Height"
              value={canvasSize.height}
              onChange={(e) => onChangeCanvasSize(e, 'canvasSize')}
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

          <Divider color="#f3f3f3" height={10} margin={[20, 0, 10, 0]} />

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

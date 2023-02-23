import React, { ChangeEvent, useMemo, useRef, useState } from 'react';
import TGCanvas from './TGCanvas';
import TGHeader from './TGHeader';
import TGColorPicker from './TGColorPicker';
import TGSelect from './TGSelect';
import TGSelectItem from './TGSelectItem';
import TGInputText from './TGInputText';
import TGIcon from './TGIcon';
import TGInputFile from './TGInputFile';
import Divider from './Divider';
import {
  fontFamilies,
  fontSizes,
  imageTypes,
  strokeTypes,
} from 'constants/select';
import { CanvasState } from '../types/canvas';
import { fill, font, stroke, blur } from '../assets/icons';
import { Color, useColor } from 'react-color-palette';
import * as S from './TG.styled';
import { downloadCanvas, getValidMessage } from '../utils/common';

interface TGProps {
  additionalFontFamily?: string[];
  modalPosition: 'left' | 'right' | 'center';
  onToggle: () => void;
}

const TG = ({
  additionalFontFamily = [],
  modalPosition,
  onToggle,
}: TGProps) => {
  const LIMIT_WIDTH = window.innerWidth - 70;
  const [canvasState, setCanvasState] = useState<CanvasState>({
    value: 'Simple Thumbnail Generator 😁',
    fontSize: '30px',
    fontStrokeType: 'None',
    fontFamily: 'Arial',
    canvasWidth: '700',
    canvasHeight: '400',
    imageType: 'png',
    xAxis: '0',
    yAxis: '0',
    angle: '0',
    isBlur: false,
    selectedImage: null,
  });

  const [bgColor, setBgColor] = useColor('hex', '#192841');
  const [fontColor, setFontColor] = useColor('hex', '#fff');
  const [strokeColor, setStrokeColor] = useColor('hex', '#121212');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getReplaceCallback = (name: string) => {
    const canvas = ['canvasWidth', 'canvasHeight'];

    if (canvas.includes(name)) return () => '';
    return (match: string, idx: number) => (!idx && match === '-' ? '-' : '');
  };

  const onChangeCanvasSize = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const { name, value } = e.target;

    const replacedCallback = getReplaceCallback(name);
    const replacedValue = value.replace(regex, replacedCallback);

    const validMessage = getValidMessage(
      name === 'canvasWidth' && +replacedValue > LIMIT_WIDTH,
      'canvasSize'
    );

    if (validMessage) return alert(validMessage);

    setCanvasState({
      ...canvasState,
      [name]: replacedValue,
    });
  };

  const onChangeTextValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setCanvasState({
      ...canvasState,
      [name]: value,
    });
  };

  const onChangeSelectValue = (name: string, value: string | number) => {
    setCanvasState({
      ...canvasState,
      [name]: value,
    });
  };

  const onChangeBgColor = (color: Color) => {
    setCanvasState({
      ...canvasState,
      selectedImage: null,
    });
    setBgColor(color);
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const img = new Image();

      img.src = files[0] && URL.createObjectURL(files[0]);
      img.onload = async () => {
        const validMessage = getValidMessage(
          img.width > LIMIT_WIDTH,
          'imageSize'
        );
        if (validMessage) return alert(validMessage);

        setCanvasState({
          ...canvasState,
          selectedImage: img,
          canvasWidth: `${img.width}`,
          canvasHeight: `${img.height}`,
        });
      };
    }
  };

  const toggleCanvasBlur = () => {
    setCanvasState({
      ...canvasState,
      isBlur: !canvasState.isBlur,
    });
  };

  const handleDownloadImage = () => {
    downloadCanvas(canvasRef, canvasState.imageType);
  };

  const fontFamilyOptions = useMemo(() => {
    return [...additionalFontFamily, ...fontFamilies];
  }, [additionalFontFamily]);

  return (
    <S.TGBodyWrapper modalPosition={modalPosition}>
      <TGHeader onToggle={onToggle} />
      <S.TGInnerWrapper>
        <S.TGContentWrapper>
          <TGCanvas
            ref={canvasRef}
            bgColor={bgColor}
            fontColor={fontColor}
            strokeColor={strokeColor}
            canvasState={canvasState}
          />

          <S.TGControllerWrapper>
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
            <S.TGIConButton isBorder onClick={toggleCanvasBlur}>
              <TGIcon src={blur} width={20} height={20} />
            </S.TGIConButton>
          </S.TGControllerWrapper>

          <S.TGControllerWrapper>
            <TGInputText
              name="xAxis"
              label="Font x-axis"
              value={canvasState.xAxis}
              onChange={onChangeCanvasSize}
            />
            <TGInputText
              name="yAxis"
              label="Font y-axis"
              value={canvasState.yAxis}
              onChange={onChangeCanvasSize}
            />
            <TGInputText
              name="angle"
              label="Font Angle"
              value={canvasState.angle}
              maxLength={4}
              onChange={onChangeCanvasSize}
            />
          </S.TGControllerWrapper>

          <S.TGControllerWrapper>
            <S.TGTextarea
              name="value"
              rows={4}
              value={canvasState.value}
              onChange={onChangeTextValue}
              placeholder="THUMBNAIL TEXT"
            />
          </S.TGControllerWrapper>

          <Divider color="#f3f3f3" height={10} margin={[20, 0, 10, 0]} />

          <S.TGControllerWrapper>
            <TGInputText
              name="canvasWidth"
              label="Canvas Width"
              value={canvasState.canvasWidth}
              onChange={onChangeCanvasSize}
              disabled={!!canvasState.selectedImage}
            />
            <TGInputText
              name="canvasHeight"
              label="Canvas Height"
              value={canvasState.canvasHeight}
              onChange={onChangeCanvasSize}
              disabled={!!canvasState.selectedImage}
            />
          </S.TGControllerWrapper>
          <S.TGControllerWrapper>
            <TGSelect
              name="fontFamily"
              label="Font Family"
              value={canvasState.fontFamily}
              onChange={onChangeSelectValue}>
              {fontFamilyOptions.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
            <TGSelect
              name="fontSize"
              label="Font Size"
              value={canvasState.fontSize}
              onChange={onChangeSelectValue}>
              {fontSizes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
            <TGSelect
              name="fontStrokeType"
              label="Font Stroke"
              value={canvasState.fontStrokeType}
              onChange={onChangeSelectValue}>
              {strokeTypes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
          </S.TGControllerWrapper>

          <Divider color="#f3f3f3" height={10} margin={[20, 0, 10, 0]} />

          <S.TGControllerWrapper>
            <TGSelect
              name="imageType"
              label="Image Type"
              value={canvasState.imageType}
              onChange={onChangeSelectValue}>
              {imageTypes.map((item) => (
                <TGSelectItem value={item} key={item}>
                  {item}
                </TGSelectItem>
              ))}
            </TGSelect>
          </S.TGControllerWrapper>

          <S.TGButtonWrapper>
            <button onClick={handleDownloadImage}>DOWNLOAD</button>
          </S.TGButtonWrapper>
        </S.TGContentWrapper>
      </S.TGInnerWrapper>
    </S.TGBodyWrapper>
  );
};

export default TG;

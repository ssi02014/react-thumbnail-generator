import React, { ChangeEvent, useMemo, useRef, useState } from 'react';
import Select from './Select';
import SelectItem from './Select/SelectItem';
import TextInput from './Inputs/TextInput';
import Icon from './Icon';
import FileInput from './Inputs/FileInput';
import Divider from './Divider';
import Accordion from './Accordion';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';
import InputRange from './Inputs/RangeInput';
import Header from './Layout/Header';
import {
  fontFamilies,
  fontSizes,
  imageTypes,
  strokeTypes,
} from '@constants/select';
import { CanvasState } from '../types/canvas';
import { fill, font, stroke, blur } from '@assets/icons';
import { Color, useColor } from 'react-color-palette';
import { BodyWrapper, ContentWrapper, InnerWrapper } from './Layout/styled';
import * as S from './TG.styled';
import { downloadCanvas, getValidMessage, ValidType } from '@utils/common';
import { IconButton } from './Icon/styled';

interface TGProps {
  additionalFontFamily?: string[];
  isFullWidth: boolean;
  modalPosition: 'left' | 'right' | 'center';
  onToggle: () => void;
}

const TG = ({
  additionalFontFamily = [],
  modalPosition,
  isFullWidth,
  onToggle,
}: TGProps) => {
  const LIMIT_WIDTH = window.innerWidth;
  const [canvasState, setCanvasState] = useState<CanvasState>({
    value: 'Simple Thumbnail\nGenerator 😁',
    fontSize: '30px',
    fontStrokeType: 'None',
    fontFamily: 'Arial',
    canvasWidth: '600',
    canvasHeight: '400',
    imageType: 'png',
    angle: '0',
    lineHeight: '0',
    isBlur: false,
    selectedImage: null,
    isBlockEvent: false,
  });

  const [bgColor, setBgColor] = useColor('hex', '#192841');
  const [fontColor, setFontColor] = useColor('hex', '#fff');
  const [strokeColor, setStrokeColor] = useColor('hex', '#121212');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasStateWithColors = useMemo(() => {
    return {
      ...canvasState,
      bgColor,
      fontColor,
      strokeColor,
    };
  }, [canvasState, bgColor, fontColor, strokeColor]);

  const fontFamilyOptions = useMemo(() => {
    return [...additionalFontFamily, ...fontFamilies];
  }, [additionalFontFamily]);

  const defaultLineHeight = useMemo(
    () => +canvasState.fontSize.replace('px', ''),
    [canvasState.fontSize]
  );

  const toggleIsBlockEvent = () => {
    setCanvasState({
      ...canvasState,
      isBlockEvent: !canvasState.isBlockEvent,
    });
  };

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

  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const { name, value } = e.target;
    const min = name === 'angle' ? -360 : defaultLineHeight * -5;
    const max = name === 'angle' ? 360 : defaultLineHeight * 3;
    const replacedCallback = getReplaceCallback(name);
    const replacedValue = value.replace(regex, replacedCallback);

    const validMessage = getValidMessage(
      +value < min || +value > max,
      name as ValidType
    );

    if (validMessage) return alert(validMessage);

    setCanvasState({
      ...canvasState,
      [name]: replacedValue,
    });
  };

  return (
    <BodyWrapper modalPosition={modalPosition} isFullWidth={isFullWidth}>
      <Header onToggle={onToggle} />
      <InnerWrapper>
        <ContentWrapper>
          <Canvas ref={canvasRef} canvasState={canvasStateWithColors} />

          <S.TGControllerWrapper>
            <FileInput width={20} height={20} onChangeImage={onChangeImage} />
            <ColorPicker
              color={bgColor}
              setColor={onChangeBgColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <Icon src={fill} width={20} height={20} />
            </ColorPicker>
            <ColorPicker
              color={fontColor}
              setColor={setFontColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <Icon src={font} width={20} height={20} />
            </ColorPicker>
            <ColorPicker
              color={strokeColor}
              setColor={setStrokeColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <Icon src={stroke} width={20} height={20} />
            </ColorPicker>
            <IconButton isBorder onClick={toggleCanvasBlur}>
              <Icon src={blur} width={20} height={20} />
            </IconButton>
          </S.TGControllerWrapper>

          <S.TGControllerWrapper>
            <S.TGTextarea
              name="value"
              rows={5}
              value={canvasState.value}
              onChange={onChangeTextValue}
              placeholder="THUMBNAIL TEXT"
            />
          </S.TGControllerWrapper>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 10, 0]} />

          <Accordion title="Font Options">
            <S.TGControllerWrapper>
              <InputRange
                label={'Font Angle'}
                name="angle"
                min={-360}
                max={360}
                value={canvasState.angle}
                onChange={handleChangeRange}
              />
              <InputRange
                label={'Line Height'}
                name="lineHeight"
                min={defaultLineHeight * -5}
                max={defaultLineHeight * 3}
                value={canvasState.lineHeight}
                onChange={handleChangeRange}
              />
            </S.TGControllerWrapper>

            <S.TGControllerWrapper>
              <Select
                name="fontFamily"
                label="Font Family"
                value={canvasState.fontFamily}
                onChange={onChangeSelectValue}>
                {fontFamilyOptions.map((item) => (
                  <SelectItem value={item} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
              <Select
                name="fontSize"
                label="Font Size"
                value={canvasState.fontSize}
                onChange={onChangeSelectValue}>
                {fontSizes.map((item) => (
                  <SelectItem value={item} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
              <Select
                name="fontStrokeType"
                label="Font Stroke"
                value={canvasState.fontStrokeType}
                onChange={onChangeSelectValue}>
                {strokeTypes.map((item) => (
                  <SelectItem value={item} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
            </S.TGControllerWrapper>
          </Accordion>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 10, 0]} />

          <Accordion title="Canvas Options">
            <S.TGControllerWrapper>
              <TextInput
                name="canvasWidth"
                label="Canvas Width"
                value={canvasState.canvasWidth}
                onChange={onChangeCanvasSize}
                disabled={!!canvasState.selectedImage}
                width={180}
              />
              <TextInput
                name="canvasHeight"
                label="Canvas Height"
                value={canvasState.canvasHeight}
                onChange={onChangeCanvasSize}
                disabled={!!canvasState.selectedImage}
                width={180}
              />
            </S.TGControllerWrapper>
          </Accordion>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 0, 0]} />

          <S.TGControllerWrapper>
            <Select
              name="imageType"
              label="Download Image Type"
              value={canvasState.imageType}
              onChange={onChangeSelectValue}>
              {imageTypes.map((item) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </S.TGControllerWrapper>

          <S.TGButtonWrapper>
            <button onClick={handleDownloadImage}>DOWNLOAD</button>
          </S.TGButtonWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </BodyWrapper>
  );
};

export default TG;

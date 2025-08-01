import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import Select from '../Select';
import SelectItem from '../Select/SelectItem';
import TextInput from '../Inputs/TextInput';
import FileInput from '../Inputs/FileInput';
import Divider from '../Divider';
import ColorPicker from '../ColorPicker';
import Header from '../Layout/Header';
import { fontFamilies, imageTypes, strokeTypes } from '@constants/select';
import { CanvasState, Color } from '@interfaces/common';
import {
  fill,
  stroke,
  blur,
  alignStart,
  alignCenter,
  alignEnd,
} from '@assets/icons';
import { useColor } from 'react-color-palette';
import { downloadCanvas } from '@utils/common';
import IconButton from '@components/IconButton';
import * as Layout from '../Layout/layout.styled';
import * as S from './ThumbnailGeneratorContent.styled';
import { useDebounce, useOutsidePointerDown } from '@modern-kit/react';
import KonvaCanvas from '@components/KonvaCanvas';
import Konva from 'konva';
import FontBoldIcon from '@assets/FontBoldIcon';
import FontItalicIcon from '@assets/FontItalicIcon';
import FontColorIcon from '@assets/FontColorIcon';
import MoreDotIcon from '@assets/MoreDotIcon';
import RangeInput from '@components/Inputs/RangeInput';

interface ThumbnailGeneratorContentProps {
  additionalFontFamily?: string[];
  isFullWidth: boolean;
  modalPosition: 'left' | 'right' | 'center';
  onToggle: () => void;
}

const initialCanvasState: CanvasState = {
  value: 'Simple Thumbnail\nGenerator 😁',
  fontStrokeType: 'None',
  textAlign: 'center',
  fontFamily: 'Arial',
  canvasWidth: 600,
  canvasHeight: 400,
  lineHeight: 1,
  imageType: 'png',
  fontStyle: 'normal',
  isBlur: false,
  selectedImage: undefined,
  isBlockEvent: false,
};

const getReplaceCallback = (name: string) => {
  const canvasOptions = ['canvasWidth', 'canvasHeight'];

  if (canvasOptions.includes(name)) return () => '';
  return (match: string, idx: number) => (!idx && match === '-' ? '-' : '');
};

const ThumbnailGeneratorContent = ({
  additionalFontFamily,
  modalPosition,
  isFullWidth,
  onToggle,
}: ThumbnailGeneratorContentProps) => {
  const { ref: moreOptionsRef } = useOutsidePointerDown<HTMLDivElement>(() => {
    if (!canvasState.isBlockEvent) {
      setIsOpenMoreOptions(false);
    }
  });

  const [isOpenMoreOptions, setIsOpenMoreOptions] = useState(false);

  const [canvasState, setCanvasState] =
    useState<CanvasState>(initialCanvasState);

  const [canvasSize, setCanvasSize] = useState<
    Pick<CanvasState, 'canvasWidth' | 'canvasHeight'>
  >({
    canvasWidth: 600,
    canvasHeight: 400,
  });
  const debouncedSetCanvasState = useDebounce(setCanvasState, 300);

  const [bgColor, setBgColor] = useColor('#192841');
  const [fontColor, setFontColor] = useColor('#fff');
  const [strokeColor, setStrokeColor] = useColor('#121212');

  const canvasRef = useRef<Konva.Stage | null>(null);

  const canvasStateWithColors = useMemo(() => {
    return {
      ...canvasState,
      bgColor,
      fontColor,
      strokeColor,
    };
  }, [canvasState, bgColor, fontColor, strokeColor]);

  const fontFamilyOptions = useMemo(() => {
    return [...(additionalFontFamily || []), ...fontFamilies];
  }, [additionalFontFamily]);

  const textAlignIcon = useMemo(() => {
    const { textAlign } = canvasState;

    if (textAlign === 'center') return alignCenter;
    if (textAlign === 'right') return alignEnd;
    return alignStart;
  }, [canvasState.textAlign]);

  const onChangeTextAlign = useCallback(() => {
    const getNextTextAlign = (prev: CanvasState) => {
      const { textAlign } = prev;

      if (textAlign === 'center') return 'right';
      if (textAlign === 'right') return 'left';
      return 'center';
    };

    setCanvasState((prev) => ({
      ...prev,
      textAlign: getNextTextAlign(prev),
    }));
  }, []);

  const onChangeStrokeColor = useCallback(
    (color: Color) => {
      setStrokeColor(color);

      if (canvasState.fontStrokeType === 'None') {
        setCanvasState((prev) => ({
          ...prev,
          fontStrokeType: 'Normal',
        }));
      }
    },
    [canvasState.fontStrokeType, setStrokeColor],
  );

  const toggleIsBlockEvent = useCallback(() => {
    setCanvasState((prev) => ({
      ...prev,
      isBlockEvent: !prev.isBlockEvent,
    }));
  }, []);

  const onChangeCanvasSize = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const regex = /[^0-9]/g;
      const { name, value } = e.target;
      const innerWidth = window.innerWidth;

      const replacedCallback = getReplaceCallback(name);
      const replacedValue = value.replace(regex, replacedCallback);

      if (name === 'canvasWidth' && +replacedValue > innerWidth) {
        return;
      }

      debouncedSetCanvasState((prev) => ({
        ...prev,
        [name]: replacedValue,
      }));

      setCanvasSize((prev) => ({
        ...prev,
        [name]: replacedValue,
      }));
    },
    [debouncedSetCanvasState],
  );

  const onChangeTextValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setCanvasState((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const onChangeSelectValue = useCallback(
    (name: string, value: string | number) => {
      setCanvasState((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const onChangeBgColor = useCallback(
    (color: Color) => {
      setCanvasState((prev) => ({
        ...prev,
        selectedImage: undefined,
        isBlur: false,
      }));
      setBgColor(color);
    },
    [setBgColor],
  );

  const onChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const img = new Image();

      img.src = files[0] && URL.createObjectURL(files[0]);
      img.onload = async () => {
        setCanvasSize({
          canvasWidth: img.width,
          canvasHeight: img.height,
        });
        setCanvasState((prev) => ({
          ...prev,
          isBlur: false,
          selectedImage: img,
          canvasWidth: img.width,
          canvasHeight: img.height,
        }));
      };
    }
  }, []);

  const toggleCanvasBlur = useCallback(() => {
    setCanvasState((prev) => ({
      ...prev,
      isBlur: !prev.isBlur,
    }));
  }, []);

  const handleDownloadImage = useCallback(() => {
    downloadCanvas(canvasRef, canvasState.imageType);
  }, [canvasState.imageType]);

  const handleToggleFontStyle = useCallback((style: 'bold' | 'italic') => {
    setCanvasState((prev) => ({
      ...prev,
      fontStyle: prev.fontStyle === style ? 'normal' : style,
    }));
  }, []);

  const handleChangeRange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCanvasState((prev) => ({
      ...prev,
      [name]: +value,
    }));
  }, []);

  return (
    <Layout.BodyWrapper modalPosition={modalPosition} isFullWidth={isFullWidth}>
      <Header onToggle={onToggle} />
      <Layout.InnerWrapper>
        <Layout.ContentWrapper>
          <KonvaCanvas ref={canvasRef} canvasState={canvasStateWithColors} />

          <S.ThumbnailGeneratorIconControllerWrapper>
            <Select
              name="fontFamily"
              value={canvasState.fontFamily}
              onChange={onChangeSelectValue}>
              {fontFamilyOptions.map((item) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
            <FileInput onChangeImage={onChangeImage} />

            <ColorPicker
              color={bgColor}
              setColor={onChangeBgColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <img src={fill} width={20} height={20} />
            </ColorPicker>
            <IconButton hasBorder onClick={toggleCanvasBlur}>
              <img src={blur} width={20} height={20} />
            </IconButton>

            <Divider color="#d3d1d1" height={20} width={1} />

            <IconButton hasBorder onClick={onChangeTextAlign}>
              <img src={textAlignIcon} width={20} height={20} />
            </IconButton>
            <ColorPicker
              color={fontColor}
              setColor={setFontColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <FontColorIcon width={20} height={20} viewBox="0 0 24 24" />
            </ColorPicker>
            <IconButton hasBorder onClick={() => handleToggleFontStyle('bold')}>
              <FontBoldIcon width={20} height={20} />
            </IconButton>
            <IconButton
              hasBorder
              onClick={() => handleToggleFontStyle('italic')}>
              <FontItalicIcon width={20} height={20} />
            </IconButton>

            <Divider color="#d3d1d1" height={20} width={1} />

            <IconButton
              hasBorder
              isOpen={isOpenMoreOptions}
              onClick={() => setIsOpenMoreOptions((prev) => !prev)}>
              <MoreDotIcon width={20} height={20} />
            </IconButton>

            {isOpenMoreOptions && (
              <S.ThumbnailGeneratorMoreOptionsWrapper ref={moreOptionsRef}>
                <RangeInput
                  label={`Line Height`}
                  name="lineHeight"
                  min={-3}
                  max={3}
                  step={0.1}
                  value={String(canvasState.lineHeight)}
                  onChange={handleChangeRange}
                />

                <Divider color="#d3d1d1" height={20} width={1} />

                <ColorPicker
                  color={strokeColor}
                  setColor={onChangeStrokeColor}
                  toggleIsBlockEvent={toggleIsBlockEvent}>
                  <img src={stroke} width={20} height={20} />
                </ColorPicker>
                <Select
                  name="fontStrokeType"
                  value={canvasState.fontStrokeType}
                  onChange={onChangeSelectValue}>
                  {strokeTypes.map((item) => (
                    <SelectItem value={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </Select>
              </S.ThumbnailGeneratorMoreOptionsWrapper>
            )}
          </S.ThumbnailGeneratorIconControllerWrapper>

          <S.ThumbnailGeneratorTextareaWrapper>
            <S.ThumbnailGeneratorTextArea
              name="value"
              rows={5}
              value={canvasState.value}
              onChange={onChangeTextValue}
              placeholder="THUMBNAIL TEXT"
            />
          </S.ThumbnailGeneratorTextareaWrapper>
          <S.ThumbnailGeneratorControllerWrapper>
            <TextInput
              name="canvasWidth"
              label={`Canvas Width (max: ${window.innerWidth}px)`}
              value={canvasSize.canvasWidth}
              onChange={onChangeCanvasSize}
              disabled={!!canvasState.selectedImage}
              width={200}
            />
            <TextInput
              name="canvasHeight"
              label="Canvas Height"
              value={canvasSize.canvasHeight}
              onChange={onChangeCanvasSize}
              disabled={!!canvasState.selectedImage}
              width={200}
            />
          </S.ThumbnailGeneratorControllerWrapper>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 0, 0]} />

          <S.ThumbnailGeneratorControllerWrapper>
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
          </S.ThumbnailGeneratorControllerWrapper>
          <S.ThumbnailGeneratorButtonWrapper>
            <S.ThumbnailGeneratorButton onClick={handleDownloadImage}>
              DOWNLOAD
            </S.ThumbnailGeneratorButton>
          </S.ThumbnailGeneratorButtonWrapper>
        </Layout.ContentWrapper>
      </Layout.InnerWrapper>
    </Layout.BodyWrapper>
  );
};

export default ThumbnailGeneratorContent;

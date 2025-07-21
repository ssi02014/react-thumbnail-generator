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
import Accordion from '../Accordion';
import ColorPicker from '../ColorPicker';
import RangeInput from '../Inputs/RangeInput';
import Header from '../Layout/Header';
import { fontFamilies, imageTypes, strokeTypes } from '@constants/select';
import { CanvasState, Color } from '@interfaces/common';
import {
  fill,
  font,
  stroke,
  blur,
  alignStart,
  alignCenter,
  alignEnd,
} from '@assets/icons';
import { useColor } from 'react-color-palette';
import { downloadCanvas } from '@utils/common';
import IconButton from '@components/IconButton';
import * as layoutStyles from '../Layout/layout.css';
import * as contentStyles from './ThumbnailGeneratorContent.css';
import { useDebounce } from '@modern-kit/react';
import CanvasV2 from '@components/Canvas/CanvasV2';
import Konva from 'konva';

interface ThumbnailGeneratorContentProps {
  additionalFontFamily?: string[];
  isFullWidth: boolean;
  modalPosition: 'left' | 'right' | 'center';
  onToggle: () => void;
}

const initialCanvasState: CanvasState = {
  value: 'Simple Thumbnail\nGenerator 😁',
  fontSize: 30,
  fontStrokeType: 'None',
  textAlign: 'center',
  fontFamily: 'Arial',
  canvasWidth: 600,
  canvasHeight: 400,
  imageType: 'png',
  angle: '0',
  lineHeight: 1,
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

  const canvasRef = useRef<Konva.Stage>(null);

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

      setCanvasState({
        ...canvasState,
        [name]: value,
      });
    },
    [canvasState],
  );

  const onChangeSelectValue = useCallback(
    (name: string, value: string | number) => {
      setCanvasState({
        ...canvasState,
        [name]: value,
      });
    },
    [canvasState],
  );

  const onChangeBgColor = useCallback(
    (color: Color) => {
      setCanvasState({
        ...canvasState,
        selectedImage: undefined,
      });
      setBgColor(color);
    },
    [canvasState, setBgColor],
  );

  const onChangeImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (files) {
        const img = new Image();

        img.src = files[0] && URL.createObjectURL(files[0]);
        img.onload = async () => {
          setCanvasState({
            ...canvasState,
            selectedImage: img,
            canvasWidth: img.width,
            canvasHeight: img.height,
          });
        };
      }
    },
    [canvasState],
  );

  const toggleCanvasBlur = useCallback(() => {
    setCanvasState({
      ...canvasState,
      isBlur: !canvasState.isBlur,
    });
  }, [canvasState]);

  const handleDownloadImage = useCallback(() => {
    downloadCanvas(canvasRef, canvasState.imageType);
  }, [canvasState.imageType]);

  const handleChangeRange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setCanvasState((prev) => ({
        ...prev,
        [name]: +value,
      }));
    },
    [canvasState.canvasHeight, canvasState.fontSize],
  );

  return (
    <section
      className={layoutStyles.bodyWrapper({ modalPosition, isFullWidth })}>
      <Header onToggle={onToggle} />
      <div className={layoutStyles.innerWrapper}>
        <div className={layoutStyles.contentWrapper}>
          <CanvasV2 ref={canvasRef} canvasState={canvasStateWithColors} />

          <div className={contentStyles.thumbnailGeneratorControllerWrapper}>
            <FileInput onChangeImage={onChangeImage} />
            <IconButton hasBorder onClick={onChangeTextAlign}>
              <img src={textAlignIcon} width={20} height={20} />
            </IconButton>

            <ColorPicker
              color={bgColor}
              setColor={onChangeBgColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <img src={fill} width={20} height={20} />
            </ColorPicker>
            <ColorPicker
              color={fontColor}
              setColor={setFontColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <img src={font} width={20} height={20} />
            </ColorPicker>
            <ColorPicker
              color={strokeColor}
              setColor={onChangeStrokeColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <img src={stroke} width={20} height={20} />
            </ColorPicker>
            <IconButton hasBorder onClick={toggleCanvasBlur}>
              <img src={blur} width={20} height={20} />
            </IconButton>
          </div>

          <div className={contentStyles.thumbnailGeneratorControllerWrapper}>
            <textarea
              className={contentStyles.thumbnailGeneratorTextArea}
              name="value"
              rows={5}
              value={canvasState.value}
              onChange={onChangeTextValue}
              placeholder="THUMBNAIL TEXT"
            />
          </div>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 10, 0]} />

          <Accordion title="Font Options">
            <div className={contentStyles.thumbnailGeneratorControllerWrapper}>
              <RangeInput
                hasInput={false}
                label={`Line Height`}
                name="lineHeight"
                min={0.1}
                max={10}
                value={String(canvasState.lineHeight)}
                onChange={handleChangeRange}
              />
            </div>

            <div className={contentStyles.thumbnailGeneratorControllerWrapper}>
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
            </div>
          </Accordion>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 10, 0]} />

          <Accordion title="Canvas Options">
            <div className={contentStyles.thumbnailGeneratorControllerWrapper}>
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
            </div>
          </Accordion>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 0, 0]} />

          <div className={contentStyles.thumbnailGeneratorControllerWrapper}>
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
          </div>

          <div className={contentStyles.thumbnailGeneratorButtonWrapper}>
            <button
              className={contentStyles.thumbnailGeneratorButton}
              onClick={handleDownloadImage}>
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThumbnailGeneratorContent;

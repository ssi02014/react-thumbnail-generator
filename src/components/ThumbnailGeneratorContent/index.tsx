import React, {
  ChangeEvent,
  useCallback,
  useEffect,
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
import { Color, TextLayer } from '@interfaces/common';
import {
  fill,
  stroke,
  blur,
  alignStart,
  alignCenter,
  alignEnd,
} from '@assets/icons';
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
import UndoIcon from '@assets/UndoIcon';
import RedoIcon from '@assets/RedoIcon';
import RangeInput from '@components/Inputs/RangeInput';
import LayerPanel from '@components/LayerPanel';
import { useCanvasReducer } from '@hooks/useCanvasReducer';

interface ThumbnailGeneratorContentProps {
  additionalFontFamily?: string[];
  isFullWidth: boolean;
  modalPosition: 'left' | 'right' | 'center';
  onToggle: () => void;
}

const ThumbnailGeneratorContent = ({
  additionalFontFamily,
  modalPosition,
  isFullWidth,
  onToggle,
}: ThumbnailGeneratorContentProps) => {
  const { ref: moreOptionsRef } = useOutsidePointerDown<HTMLDivElement>(() => {
    if (!state.isBlockEvent) {
      setIsOpenMoreOptions(false);
    }
  });

  const [isOpenMoreOptions, setIsOpenMoreOptions] = useState(false);

  const { state, dispatch, undo, redo, canUndo, canRedo, selectedLayer } =
    useCanvasReducer();

  const [canvasSize, setCanvasSize] = useState<{
    canvasWidth: number;
    canvasHeight: number;
  }>({
    canvasWidth: 600,
    canvasHeight: 400,
  });
  const debouncedDispatch = useDebounce(
    (changes: { canvasWidth?: number; canvasHeight?: number }) => {
      dispatch({ type: 'SET_CANVAS_PROP', changes });
    },
    300,
  );

  const canvasRef = useRef<Konva.Stage | null>(null);

  const selectedTextLayer =
    selectedLayer?.type === 'text' ? (selectedLayer as TextLayer) : null;

  const isTextControlsEnabled = !!selectedTextLayer;

  const fontFamilyOptions = useMemo(() => {
    return [...(additionalFontFamily || []), ...fontFamilies];
  }, [additionalFontFamily]);

  const textAlignIcon = useMemo(() => {
    if (!selectedTextLayer) return alignCenter;
    const { textAlign } = selectedTextLayer;
    if (textAlign === 'center') return alignCenter;
    if (textAlign === 'right') return alignEnd;
    return alignStart;
  }, [selectedTextLayer]);

  // Keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  const toggleIsBlockEvent = useCallback(() => {
    dispatch({ type: 'TOGGLE_BLOCK_EVENT' });
  }, [dispatch]);

  const onChangeTextAlign = useCallback(() => {
    if (!selectedTextLayer) return;
    const { textAlign } = selectedTextLayer;
    const next =
      textAlign === 'center'
        ? 'right'
        : textAlign === 'right'
          ? 'left'
          : 'center';
    dispatch({
      type: 'UPDATE_LAYER',
      id: selectedTextLayer.id,
      changes: { textAlign: next },
    });
  }, [selectedTextLayer, dispatch]);

  const onChangeStrokeColor = useCallback(
    (color: Color) => {
      if (!selectedTextLayer) return;
      const changes: Partial<TextLayer> =
        selectedTextLayer.fontStrokeType === 'None'
          ? { strokeColor: color, fontStrokeType: 'Normal' }
          : { strokeColor: color };
      dispatch({ type: 'UPDATE_LAYER', id: selectedTextLayer.id, changes });
    },
    [selectedTextLayer, dispatch],
  );

  const getReplaceCallback = (name: string) => {
    const canvasOptions = ['canvasWidth', 'canvasHeight'];
    if (canvasOptions.includes(name)) return () => '';
    return (match: string, idx: number) => (!idx && match === '-' ? '-' : '');
  };

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

      debouncedDispatch({ [name]: +replacedValue || 0 });

      setCanvasSize((prev) => ({
        ...prev,
        [name]: replacedValue,
      }));
    },
    [debouncedDispatch],
  );

  const onChangeTextValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!selectedTextLayer) return;
      dispatch({
        type: 'UPDATE_LAYER',
        id: selectedTextLayer.id,
        changes: { value: e.target.value },
      });
    },
    [selectedTextLayer, dispatch],
  );

  const onChangeSelectValue = useCallback(
    (name: string, value: string | number) => {
      if (name === 'imageType') {
        dispatch({
          type: 'SET_CANVAS_PROP',
          changes: { imageType: value as 'png' | 'jpg' | 'webp' },
        });
      } else if (selectedTextLayer) {
        dispatch({
          type: 'UPDATE_LAYER',
          id: selectedTextLayer.id,
          changes: { [name]: value },
        });
      }
    },
    [selectedTextLayer, dispatch],
  );

  const onChangeBgColor = useCallback(
    (color: Color) => {
      dispatch({ type: 'SET_BG_COLOR', color });
    },
    [dispatch],
  );

  const onChangeBackgroundImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (files && files[0]) {
        const img = new Image();
        img.src = URL.createObjectURL(files[0]);
        img.onload = () => {
          const maxWidth = window.innerWidth;
          const maxHeight = window.innerHeight * 0.6;
          const scale = Math.min(
            maxWidth / img.width,
            maxHeight / img.height,
            1,
          );
          const fitWidth = Math.round(img.width * scale);
          const fitHeight = Math.round(img.height * scale);

          setCanvasSize({
            canvasWidth: fitWidth,
            canvasHeight: fitHeight,
          });
          dispatch({
            type: 'SET_BACKGROUND_IMAGE',
            image: img,
            width: fitWidth,
            height: fitHeight,
          });
        };
      }
    },
    [dispatch],
  );

  const toggleCanvasBlur = useCallback(() => {
    dispatch({
      type: 'SET_CANVAS_PROP',
      changes: { isBlur: !state.isBlur },
    });
  }, [state.isBlur, dispatch]);

  const handleDownloadImage = useCallback(() => {
    downloadCanvas(canvasRef, state.imageType);
  }, [state.imageType]);

  const handleToggleFontStyle = useCallback(
    (style: 'bold' | 'italic') => {
      if (!selectedTextLayer) return;
      dispatch({
        type: 'UPDATE_LAYER',
        id: selectedTextLayer.id,
        changes: {
          fontStyle: selectedTextLayer.fontStyle === style ? 'normal' : style,
        },
      });
    },
    [selectedTextLayer, dispatch],
  );

  const handleChangeRange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!selectedTextLayer) return;
      const { name, value } = e.target;
      dispatch({
        type: 'UPDATE_LAYER',
        id: selectedTextLayer.id,
        changes: { [name]: +value },
      });
    },
    [selectedTextLayer, dispatch],
  );

  const handleChangeFontSize = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!selectedTextLayer) return;
      dispatch({
        type: 'UPDATE_LAYER',
        id: selectedTextLayer.id,
        changes: { fontSize: +e.target.value || 1 },
      });
    },
    [selectedTextLayer, dispatch],
  );

  const handleSelectLayer = useCallback(
    (id: string | null) => {
      dispatch({ type: 'SELECT_LAYER', id });
    },
    [dispatch],
  );

  const handleMoveLayer = useCallback(
    (id: string, x: number, y: number) => {
      dispatch({ type: 'MOVE_LAYER', id, x, y });
    },
    [dispatch],
  );

  const handleTransformLayer = useCallback(
    (
      id: string,
      attrs: {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
      },
    ) => {
      dispatch({ type: 'TRANSFORM_LAYER', id, attrs });
    },
    [dispatch],
  );

  const handleAddTextLayer = useCallback(() => {
    dispatch({ type: 'ADD_TEXT_LAYER' });
  }, [dispatch]);

  const handleAddImageLayer = useCallback(
    (image: HTMLImageElement, width: number, height: number) => {
      dispatch({ type: 'ADD_IMAGE_LAYER', image, width, height });
    },
    [dispatch],
  );

  const handleDeleteLayer = useCallback(
    (id: string) => {
      dispatch({ type: 'DELETE_LAYER', id });
    },
    [dispatch],
  );

  return (
    <Layout.BodyWrapper modalPosition={modalPosition} isFullWidth={isFullWidth}>
      <Header onToggle={onToggle} />
      <Layout.InnerWrapper>
        <Layout.ContentWrapper>
          <KonvaCanvas
            ref={canvasRef}
            canvasState={state}
            onSelectLayer={handleSelectLayer}
            onMoveLayer={handleMoveLayer}
            onTransformLayer={handleTransformLayer}
          />

          <S.ThumbnailGeneratorIconControllerWrapper>
            <IconButton
              hasBorder
              onClick={undo}
              disabled={!canUndo()}>
              <UndoIcon width={16} height={16} fill={canUndo() ? '#09244B' : '#ccc'} />
            </IconButton>
            <IconButton
              hasBorder
              onClick={redo}
              disabled={!canRedo()}>
              <RedoIcon width={16} height={16} fill={canRedo() ? '#09244B' : '#ccc'} />
            </IconButton>

            <Divider color="#d3d1d1" height={20} width={1} />

            <Select
              name="fontFamily"
              value={selectedTextLayer?.fontFamily ?? 'Arial'}
              onChange={onChangeSelectValue}>
              {fontFamilyOptions.map((item) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
            <FileInput onChangeImage={onChangeBackgroundImage} />

            <ColorPicker
              color={state.bgColor}
              setColor={onChangeBgColor}
              toggleIsBlockEvent={toggleIsBlockEvent}>
              <img src={fill} width={20} height={20} />
            </ColorPicker>
            <IconButton hasBorder onClick={toggleCanvasBlur}>
              <img src={blur} width={20} height={20} />
            </IconButton>

            <Divider color="#d3d1d1" height={20} width={1} />

            <IconButton
              hasBorder
              onClick={onChangeTextAlign}
              disabled={!isTextControlsEnabled}>
              <img src={textAlignIcon} width={20} height={20} />
            </IconButton>
            <ColorPicker
              key={`fontColor-${selectedTextLayer?.id ?? 'none'}`}
              color={selectedTextLayer?.fontColor ?? state.bgColor}
              setColor={(color: Color) => {
                if (selectedTextLayer) {
                  dispatch({
                    type: 'UPDATE_LAYER',
                    id: selectedTextLayer.id,
                    changes: { fontColor: color },
                  });
                }
              }}
              toggleIsBlockEvent={toggleIsBlockEvent}
              disabled={!isTextControlsEnabled}>
              <FontColorIcon width={20} height={20} viewBox="0 0 24 24" />
            </ColorPicker>
            <IconButton
              hasBorder
              onClick={() => handleToggleFontStyle('bold')}
              disabled={!isTextControlsEnabled}>
              <FontBoldIcon width={20} height={20} />
            </IconButton>
            <IconButton
              hasBorder
              onClick={() => handleToggleFontStyle('italic')}
              disabled={!isTextControlsEnabled}>
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
                  label="Font Size"
                  name="fontSize"
                  min={8}
                  max={120}
                  step={1}
                  value={String(selectedTextLayer?.fontSize ?? 30)}
                  onChange={handleChangeFontSize}
                  disabled={!isTextControlsEnabled}
                />

                <Divider color="#d3d1d1" height={20} width={1} />

                <RangeInput
                  label="Line Height"
                  name="lineHeight"
                  min={-3}
                  max={3}
                  step={0.1}
                  value={String(selectedTextLayer?.lineHeight ?? 1)}
                  onChange={handleChangeRange}
                  disabled={!isTextControlsEnabled}
                />

                <Divider color="#d3d1d1" height={20} width={1} />

                <ColorPicker
                  key={`strokeColor-${selectedTextLayer?.id ?? 'none'}`}
                  color={
                    selectedTextLayer?.strokeColor ?? state.bgColor
                  }
                  setColor={onChangeStrokeColor}
                  toggleIsBlockEvent={toggleIsBlockEvent}
                  disabled={!isTextControlsEnabled}>
                  <img src={stroke} width={20} height={20} />
                </ColorPicker>
                <Select
                  name="fontStrokeType"
                  value={selectedTextLayer?.fontStrokeType ?? 'None'}
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

          <LayerPanel
            layers={state.layers}
            selectedLayerId={state.selectedLayerId}
            onSelectLayer={(id) => handleSelectLayer(id)}
            onAddTextLayer={handleAddTextLayer}
            onAddImageLayer={handleAddImageLayer}
            onDeleteLayer={handleDeleteLayer}
          />

          <S.ThumbnailGeneratorTextareaWrapper>
            <S.ThumbnailGeneratorTextArea
              name="value"
              rows={5}
              value={selectedTextLayer?.value ?? ''}
              onChange={onChangeTextValue}
              placeholder={
                isTextControlsEnabled
                  ? 'THUMBNAIL TEXT'
                  : 'Select a text layer to edit'
              }
              disabled={!isTextControlsEnabled}
            />
          </S.ThumbnailGeneratorTextareaWrapper>
          <S.ThumbnailGeneratorControllerWrapper>
            <TextInput
              name="canvasWidth"
              label={`Canvas Width (max: ${window.innerWidth}px)`}
              value={canvasSize.canvasWidth}
              onChange={onChangeCanvasSize}
              disabled={!!state.backgroundImage}
              width={200}
            />
            <TextInput
              name="canvasHeight"
              label="Canvas Height"
              value={canvasSize.canvasHeight}
              onChange={onChangeCanvasSize}
              disabled={!!state.backgroundImage}
              width={200}
            />
          </S.ThumbnailGeneratorControllerWrapper>

          <Divider color="#f3f3f3" height={10} margin={[10, 0, 0, 0]} />

          <S.ThumbnailGeneratorControllerWrapper>
            <Select
              name="imageType"
              label="Download Image Type"
              value={state.imageType}
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

import React, { ChangeEvent, useCallback, useRef } from 'react';
import { Layer, LayerId } from '@interfaces/common';
import IconButton from '@components/IconButton';
import AddTextIcon from '@assets/AddTextIcon';
import AddImageIcon from '@assets/AddImageIcon';
import DeleteIcon from '@assets/DeleteIcon';
import * as S from './LayerPanel.styled';

interface LayerPanelProps {
  layers: Layer[];
  selectedLayerId: LayerId | null;
  onSelectLayer: (id: LayerId) => void;
  onAddTextLayer: () => void;
  onAddImageLayer: (image: HTMLImageElement, width: number, height: number) => void;
  onDeleteLayer: (id: LayerId) => void;
}

const LayerPanel = ({
  layers,
  selectedLayerId,
  onSelectLayer,
  onAddTextLayer,
  onAddImageLayer,
  onDeleteLayer,
}: LayerPanelProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleImageUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (!files || !files[0]) return;

      const img = new Image();
      img.src = URL.createObjectURL(files[0]);
      img.onload = () => {
        const maxSize = 200;
        const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
        onAddImageLayer(img, img.width * scale, img.height * scale);
      };

      // Reset so same file can be selected again
      e.target.value = '';
    },
    [onAddImageLayer],
  );

  const getLayerLabel = (layer: Layer) => {
    if (layer.type === 'text') {
      const preview = layer.value.split('\n')[0];
      return preview.length > 20 ? preview.slice(0, 20) + '...' : preview;
    }
    return 'Image';
  };

  return (
    <>
      <S.LayerPanelHeader>
        <S.LayerPanelTitle>Layers</S.LayerPanelTitle>
        <S.LayerPanelActions>
          <IconButton hasBorder onClick={onAddTextLayer}>
            <AddTextIcon width={16} height={16} />
          </IconButton>
          <IconButton hasBorder onClick={handleAddImage}>
            <AddImageIcon width={16} height={16} />
          </IconButton>
        </S.LayerPanelActions>
      </S.LayerPanelHeader>

      <S.LayerPanelWrapper>
        {[...layers].reverse().map((layer) => (
          <S.LayerItem
            key={layer.id}
            isSelected={selectedLayerId === layer.id}
            onClick={() => onSelectLayer(layer.id)}>
            <S.LayerItemInfo>
              <S.LayerTypeBadge>
                {layer.type === 'text' ? 'T' : 'IMG'}
              </S.LayerTypeBadge>
              <S.LayerName>{getLayerLabel(layer)}</S.LayerName>
            </S.LayerItemInfo>
            <S.DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                onDeleteLayer(layer.id);
              }}>
              <DeleteIcon width={14} height={14} />
            </S.DeleteButton>
          </S.LayerItem>
        ))}
      </S.LayerPanelWrapper>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
    </>
  );
};

export default LayerPanel;

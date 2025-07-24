import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import ThumbnailGenerator from '../../index';
import { Size } from '@utils/style';

interface Props {
  iconSize?: Size;
  modalPosition?: 'left' | 'right' | 'center';
  iconPosition?: [number, number, number, number];
  isFullWidth?: boolean;
}

type ThumbnailGeneratorMeta = Meta<typeof ThumbnailGenerator>;
type ThumbnailGeneratorStory = StoryFn<typeof ThumbnailGenerator>;

const meta: ThumbnailGeneratorMeta = {
  title: 'components/ThumbnailGenerator',
  component: ThumbnailGenerator,
};

export default meta;

const Template: ThumbnailGeneratorStory = ({
  modalPosition,
  iconPosition,
  iconSize,
  isFullWidth,
}: Props) => {
  return (
    <ThumbnailGenerator
      modalPosition={modalPosition}
      iconPosition={iconPosition}
      iconSize={iconSize}
      isFullWidth={isFullWidth}
      isDefaultOpen
    />
  );
};

export const Default: ThumbnailGeneratorStory = Template.bind({
  iconSize: 'medium',
  modalPosition: 'right',
  iconPosition: [0, 20, 20, 0],
  isFullWidth: false,
});

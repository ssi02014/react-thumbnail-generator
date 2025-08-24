import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import ThumbnailGenerator from '../../index';

interface Props {
  modalPosition?: 'left' | 'right' | 'center';
  iconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
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
  isFullWidth,
}: Props) => {
  return (
    <ThumbnailGenerator
      modalPosition={modalPosition}
      iconPosition={iconPosition}
      isFullWidth={isFullWidth}
      isDefaultOpen
    />
  );
};

export const Default: ThumbnailGeneratorStory = Template.bind({
  modalPosition: 'right',
  iconPosition: 'bottom-right',
  isFullWidth: false,
});

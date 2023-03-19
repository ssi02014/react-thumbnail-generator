import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThumbnailGenerator from '../../lib/ThumbnailGenerator';
import { Size } from '../../utils/style';
import { toggleButton } from '@assets/icons';

export default {
  title: 'components/ThumbnailGenerator',
  argTypes: {
    modalPosition: {
      options: ['left', 'right', 'center'],
      control: { type: 'select' },
    },
    iconSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    isFullWidth: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
};

interface Props {
  iconSize?: Size;
  buttonIcon?: React.ReactNode;
  modalPosition?: 'left' | 'right' | 'center';
  iconPosition?: [number, number, number, number];
  isFullWidth?: boolean;
}

const Template: Story = ({
  modalPosition,
  iconPosition,
  iconSize,
  isFullWidth,
}: Props) => {
  return (
    <ThumbnailGenerator
      id="thumbnail-generator"
      modalPosition={modalPosition}
      iconPosition={iconPosition}
      iconSize={iconSize}
      isFullWidth={isFullWidth}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  iconSize: 'medium',
  buttonIcon: <img src={toggleButton} width={40} height={40} />,
  modalPosition: 'right',
  iconPosition: [0, 20, 20, 0],
  isFullWidth: false,
};

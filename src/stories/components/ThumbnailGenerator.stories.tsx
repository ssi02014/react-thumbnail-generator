import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThumbnailGenerator from '../../lib/ThumbnailGenerator';
import { Size, Position } from '../../utils/style';
import { toggleButton, fill } from '../../assets/icons';

export default {
  title: 'components/ThumbnailGenerator',
  argTypes: {
    iconSrc: {
      options: [toggleButton, fill],
      control: { type: 'select' },
    },
    iconSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    position: {
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
    },
  },
};

interface Props {
  iconSize?: Size;
  position?: Position;
  iconSrc?: string;
}

const Template: Story = ({ iconSize, position, iconSrc }: Props) => {
  return (
    <ThumbnailGenerator
      id="thumbnail-generator"
      iconSrc={iconSrc}
      position={position}
      iconSize={iconSize}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  position: 'bottom-right',
  iconSize: 'medium',
  iconSrc: toggleButton,
};

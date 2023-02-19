import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThumbnailGenerator from '../../lib/ThumbnailGenerator';
import { Size, Position } from '../../utils/style';

export default {
  title: 'components/ThumbnailGenerator',
  argTypes: {
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
}

const Template: Story = ({ iconSize, position }: Props) => {
  return <ThumbnailGenerator position={position} iconSize={iconSize} />;
};

export const Default = Template.bind({});

Default.args = {
  position: 'bottom-right',
  iconSize: 'medium',
};

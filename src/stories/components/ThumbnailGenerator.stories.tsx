import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThumbnailGenerator from '../../lib/ThumbnailGenerator';
import { Size } from '../../utils/style';
import { toggleButton, fill } from '../../assets/icons';

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
  },
};

interface Props {
  iconSize?: Size;
  buttonIcon?: React.ReactNode;
  modalPosition?: 'left' | 'right' | 'center';
  iconPosition?: [number, number, number, number];
}

const Template: Story = ({
  modalPosition,
  iconPosition,
  iconSize,
  buttonIcon,
}: Props) => {
  return (
    <ThumbnailGenerator
      id="thumbnail-generator"
      buttonIcon={buttonIcon}
      modalPosition={modalPosition}
      iconPosition={iconPosition}
      iconSize={iconSize}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  iconSize: 'medium',
  buttonIcon: <img src={toggleButton} width={40} height={40} />,
  modalPosition: 'right',
  iconPosition: [0, 20, 20, 0],
};

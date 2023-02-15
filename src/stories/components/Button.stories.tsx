import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from '../../components/Button/Button';

export default {
  title: 'components/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'check' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
  },
};

interface Props {
  size: 'medium' | 'large';
  select: any[];
}

const Template: Story<Props> = ({ size }: Props) => {
  return (
    <div>
      <Button size={size}>안녕</Button>
    </div>
  );
};

export const Default = Template.bind({});
export const LARGE = Template.bind({});

Default.args = {
  size: 'medium',
};

LARGE.args = {
  size: 'large',
};

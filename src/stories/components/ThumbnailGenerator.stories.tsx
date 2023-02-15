import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThumbnailGenerator from 'src/lib/ThumbnailGenerator';

export default {
  title: 'components/ThumbnailGenerator',
  argTypes: {},
};

interface Props {
  size: 'medium' | 'large';
  select: any[];
}

const Template: Story<Props> = () => {
  return <ThumbnailGenerator />;
};

export const Default = Template.bind({});

Default.args = {};

import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ThumbnailGenerator from '../../lib/ThumbnailGenerator';

export default {
  title: 'components/ThumbnailGenerator',
  argTypes: {},
};

const Template: Story = () => {
  return <ThumbnailGenerator iconShape="circle" />;
};

export const Default = Template.bind({});

Default.args = {};

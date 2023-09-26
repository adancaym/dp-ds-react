import { Meta, Story } from '@storybook/react';
import React from 'react';

import Trigger from './component';


export default {
  component: Trigger,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <Trigger {...args}>Click me</Trigger>;

export const Default = Template.bind({});

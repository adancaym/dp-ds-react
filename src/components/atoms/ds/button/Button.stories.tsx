import { Button } from 'src/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary',  "warning", "danger", "success", "info" ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['full', 'large', 'medium', 'small'],
      },
    }, 
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    color: 'primary',
    children: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    type: 'button',
    color: 'secondary',
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    type: 'button',
    size: 'large',
    children: 'Button'
  },
};

export const Small: Story = {
  args: {
    type: 'button',
    size: 'small',
    children: 'Button'
  },
};

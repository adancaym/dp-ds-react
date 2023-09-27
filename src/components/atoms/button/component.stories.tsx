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
    color: 'primary',
    children: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  },
};

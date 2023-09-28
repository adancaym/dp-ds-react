
import Reader from './Reader';
import { StoryObj } from '@storybook/react';

export default {
  component: Reader,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Reader>;

export const Default: Story = {
  args: {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => {
      console.log(value.target.value);
    }
  },
};
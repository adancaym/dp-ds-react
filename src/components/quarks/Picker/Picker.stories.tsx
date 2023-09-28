import Picker from './Picker';

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Picker> = { 
  component: Picker,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Picker>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};



import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import Input from './component';

export default {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input Label',
  placeholder: 'Input Placeholder',
};
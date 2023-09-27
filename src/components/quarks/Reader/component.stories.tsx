import { Story } from '@storybook/react';
import { useState } from 'react';

import Reader from './component';
import { IReaderProps } from './type';

export default {
  component: Reader,
  tags: ['autodocs'],
};
const Template: Story<IReaderProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Reader
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
};
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Typography from './component';
import { ITypography } from './type';

export default {
    tags: ['autodocs'],
  component: Typography,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    role: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story<ITypography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Typography',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  as: 'h1',
  children: 'Heading 1 Typography',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: 'h2',
  children: 'Heading 2 Typography',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: 'h3',
  children: 'Heading 3 Typography',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  as: 'h4',
  children: 'Heading 4 Typography',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  as: 'h5',
  children: 'Heading 5 Typography',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  as: 'h6',
  children: 'Heading 6 Typography',
};
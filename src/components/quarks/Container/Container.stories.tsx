import { Meta, Story } from '@storybook/react';
import React from 'react';

import Container from './Container';
import { IContainer } from './type';

export default {
  component: Container,
  tags: ['autodocs'],
} as Meta;

const Template: Story<IContainer> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};
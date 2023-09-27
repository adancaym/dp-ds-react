
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Picker from './Picker';
import { IPicker } from './type';

export default {
    component: Picker,
    tags: ['autodocs'],
} as Meta;

const Template: Story<IPicker> = (args) => <Picker {...args} />;

export const Default = Template.bind({});


Default.args = {
    options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
    ],
};

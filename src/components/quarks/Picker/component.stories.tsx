
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Picker from './component';
import { IPicker } from './type';

export default {
    component: Picker,
    tags: ['autodocs'],
} as Meta;

const Template: Story<IPicker> = (args) => <Picker {...args} />;

export const Default = Template.bind({});


Default.args = {
    children: [
        <option key="1" value="option1">Option 1</option>,
        <option key="2" value="option2">Option 2</option>,
        <option key="3" value="option3">Option 3</option>,
    ],
};

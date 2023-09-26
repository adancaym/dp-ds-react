import { Story } from '@storybook/react';

import { Tab } from './components';
import Tabs from './Tabs';
import { ITabsProps } from './types';

export default {
    tags: ['autodocs'],
    component: Tabs,
};

const Template: Story<ITabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Tab label="Tab 1" name="1">Tab 1</Tab>,
    <Tab label="Tab 2" name="2">Tab 2</Tab>,
    <Tab label="Tab 3" name="3">Tab 3</Tab>,
  ],
};


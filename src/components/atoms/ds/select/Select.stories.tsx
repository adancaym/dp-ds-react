

import React from "react";
import { Meta, Story } from "@storybook/react"
import Select from "./Select";
import { ISelect } from "./type";

export default {
    component: Select,
    tags: ["autodocs"],
} as Meta;

const Template: Story<ISelect> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    placeholder: "Select an option",
};

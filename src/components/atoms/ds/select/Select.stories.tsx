import { Meta,  StoryObj } from "@storybook/react"
import Select from "./Select";

export default {
    component: Select,
    tags: ["autodocs"],
} as Meta;


type Story = StoryObj<typeof Select>;


export const Default: Story = {
    args: {
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Label',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Placeholder',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
};

export const WithError: Story = {
    args: {
        error: 'Error',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
};

export const WithDescription: Story = {
    args: {
        description: 'Description',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
};

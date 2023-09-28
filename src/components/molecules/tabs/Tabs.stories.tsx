import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { Tab } from "./components";

const meta: Meta<typeof Tabs> = { 
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: [
      <Tab key="1" label="Tab 1" name="Tab1">
        Tab 1
      </Tab>,
      <Tab key="2" label="Tab 2" name="Tab2">
        Tab 2
      </Tab>,
      <Tab key="3" label="Tab 3" name="Tab3">
        Tab 3
      </Tab>,
    ],
  },
};




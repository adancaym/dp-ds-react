import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { BrowserRouter } from 'react-router-dom';
import { INavigationProps, NavigationItem } from 'src/components';
import { routes } from "src/components/router/routes";
import Navigation from "./Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  tags: ['autodocs'],
};

export default meta;

const Template: FC<INavigationProps> = (args) => (
  <BrowserRouter>
    <Navigation {...args} />
  </BrowserRouter>
);
type Story = StoryObj<typeof Template>;

const args: INavigationProps = {
  router: routes,
  children: [
    <NavigationItem
      key="1"

      label="Home"
      path="/"
      position="left"
    />,
    <NavigationItem

      key="2"
      label="About"
      path="/about"
      position="left"
    />,
    <NavigationItem
        key="3"
        label="Contact"
        path="/contact"
        position="right"
    />
  ]
};

export const Default: Story = {
  args
};
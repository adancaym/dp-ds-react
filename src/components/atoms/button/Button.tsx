import { FC, createElement, memo } from "react";

import {
  IWithChildren,
  IWithDescription,
  IWithOnClick,
  IWithStyle,
  IWithVariantButton,
} from "src/components";

import { Trigger, withChildrenText, withDescription } from "src/components";
import { MakeButtonTheme, useTheme } from "src/theme";
import { IComponent } from "src/types";

type ButtonProps =
  IComponent &
  IWithChildren &
  IWithVariantButton &
  IWithOnClick &
  IWithDescription &
  IWithStyle;

let Component: FC<ButtonProps> = ({
  variant,
  children,
  description,
  ...props
}) => {
  const { theme } = useTheme();
  const { typography, button } = MakeButtonTheme(theme, variant);

  let Component = Trigger as FC<ButtonProps>;
  Component = withDescription<ButtonProps>({ Component, description });
  Component = withChildrenText<ButtonProps>({
    Component,
    children,
    style: typography,
  });

  return createElement(Component, { ...props, style: button });
};

Component = memo(Component);

export default Component;

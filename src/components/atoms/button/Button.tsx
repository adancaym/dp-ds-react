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

type ButtonProps = IWithChildren &
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

  let Component = Trigger;
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

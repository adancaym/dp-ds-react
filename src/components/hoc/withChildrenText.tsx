import { IComponent, IWithChildren, IWithStyle } from "src/types";
import { Typography, IWith } from "src/components";
import { createElement } from "react";

interface IWithChildrenTextProps<T>
  extends IWith<T>,
    IWithStyle,
    IWithChildren {}

export const withChildrenText =
  <T extends IComponent>({
    Component,
    children,
    style,
  }: IWithChildrenTextProps<T>) =>
  (props: T) =>
    createElement(
      Component,
      props,
      createElement(Typography, { style }, children)
    );

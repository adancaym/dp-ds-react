import { IComponent, IWithLabel, IWithStyle } from "src/types";
import { Container, Typography, IWith } from "src/components";
import { createElement } from "react";

type IWithLabelProps<T> = IWith<T> & IWithStyle & IWithLabel;

export const withLabel =
  <T extends IComponent>({ Component, style, label }: IWithLabelProps<T>) =>
  (props: T) =>
    createElement(
      Container,
      null,
      label && createElement(Typography, { style }, label),
      createElement(Component, props)
    );

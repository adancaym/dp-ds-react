import { IComponent } from "src/types";
import { Container, Typography } from "src/components";
import { IWithDescriptionProps } from "./types/IWithDescriptionProps";
import { createElement } from "react";

export const withDescription =
  <T extends IComponent>({
    Component,
    description,
    style,
  }: IWithDescriptionProps<T>) =>
  (props: T) =>
    createElement(
      Container,
      null,
      createElement(Component, props),
      description && createElement(Typography, { style }, description)
    );

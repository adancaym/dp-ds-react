import {
  Container,
  Typography,
  IWith,
  IWithStyle,
  IWithLabel,
} from "src/components";
import { createElement } from "react";
import { IComponent } from "src/types";

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

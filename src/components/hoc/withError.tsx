import {
  Container,
  Typography,
  IWith,
  IWithStyle,
  IWithError,
} from "src/components";
import { createElement } from "react";
import { IComponent } from "src/types";

type IWithErrorProps<T> = IWith<T> & IWithStyle & IWithError;

export const withError =
  <T extends IComponent>({ Component, error, style }: IWithErrorProps<T>) =>
  (props: T) =>
    createElement(
      Container,
      null,
      createElement(Component, props),
      error && createElement(Typography, { style }, error)
    );

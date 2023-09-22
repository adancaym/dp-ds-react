import { IComponent, IWithError, IWithStyle } from "src/types";
import { Container, Typography, IWith } from "src/components";
import { createElement } from "react";

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

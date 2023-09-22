import { FC, createElement } from "react";

import { IWithDescription, IWithError, IWithLabel } from "src/components";
import {
  withLabel,
  withError,
  withDescription,
  IReaderProps,
  ITypeData,
  Reader,
} from "src/components";
import { useTheme, MakeInputTheme } from "src/theme";
import { IComponent } from "src/types";

type InputProps<T> = IReaderProps<T> &
  IComponent &
  IWithDescription &
  IWithError &
  IWithLabel;

const Input = <T extends ITypeData = string>({
  label,
  error,
  description,
  ...props
}: InputProps<T>) => {
  const { theme } = useTheme();
  const inputStyle = MakeInputTheme(theme);

  let Component = Reader as FC<IReaderProps<T>>;

  Component = withLabel<InputProps<T>>({
    Component,
    label,
    style: inputStyle.label,
  });
  Component = withError<InputProps<T>>({
    Component,
    error,
    style: inputStyle.error,
  });
  Component = withDescription<InputProps<T>>({
    Component,
    description,
    style: inputStyle.description,
  });

  return createElement(Component, { ...props, style: inputStyle.input });
};

let Component = Input;

export default Component;

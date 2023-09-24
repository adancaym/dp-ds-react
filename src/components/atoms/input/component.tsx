import { createElement, FC } from 'react';
import { IReaderProps, ITypeData, Reader, withDescription, withError, withLabel } from 'src/components';
import { MakeInputTheme, useTheme } from 'src/theme';

import { InputProps } from './type';

const Component = <T extends ITypeData = string>({
  label,
  error,
  description,
  ...props
}: InputProps<T>) => {
  const { theme } = useTheme();
  const inputStyle = MakeInputTheme(theme);

  let Wrapper = Reader as FC<IReaderProps<T>>;

  Wrapper = withLabel<InputProps<T>>({
    Component: Wrapper,
    label,
    style: inputStyle.label,
  });
  Wrapper = withError<InputProps<T>>({
    Component: Wrapper,
    error,
    style: inputStyle.error,
  });
  Wrapper = withDescription<InputProps<T>>({
    Component: Wrapper,
    description,
    style: inputStyle.description,
  });

  return createElement(Wrapper, { ...props, style: inputStyle.input });
};

export default Component;

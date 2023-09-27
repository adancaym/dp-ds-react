import { FC } from 'react';
import { Reader, withDescription, withError, withLabel, withStyle } from 'src/components';
import { MakeInputTheme, useTheme } from 'src/theme';
import { ITypeDataInput } from 'src/types';

import { InputProps } from './type';

const Input = <T extends ITypeDataInput = string>({ label, error, description, style, ...props}: InputProps<T>) => {
  const { theme } = useTheme();
  const inputStyle = MakeInputTheme(theme);

  let Wrapper = Reader;
  
  Wrapper = withStyle({
    Component: Wrapper,
    style
  });
  
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

  return <Wrapper {...props} />;
};

export default Input;

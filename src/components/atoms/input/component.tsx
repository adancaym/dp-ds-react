import { FC } from 'react';
import { Reader, withDescription, withError, withLabel, withStyle } from 'src/components';
import { MakeInputTheme, useTheme } from 'src/theme';

import { InputProps } from './type';

const Input : FC<InputProps> = ({ label, error, description, style, ...props}: InputProps) => {
  const { theme } = useTheme();
  const inputStyle = MakeInputTheme(theme);

  let ReaderInput = Reader;
  
  if(style) ReaderInput = withStyle({
    Component: ReaderInput,
    style
  });
  
  if(label) ReaderInput = withLabel({
    Component: ReaderInput,
    label,
    style: inputStyle.label,
  });
  
  if(error) ReaderInput = withError({
    Component: ReaderInput,
    error,
    style: inputStyle.error,
  });

  if(description) ReaderInput = withDescription({
    Component: ReaderInput,
    description,
    style: inputStyle.description,
  });

  return <ReaderInput {...props} />;
};

export default Input;

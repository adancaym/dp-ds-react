import { createElement, FC, memo } from 'react';
import { Trigger, withChildrenText, withDescription } from 'src/components';
import { MakeButtonTheme, useTheme } from 'src/theme';

import { ButtonProps } from './type';

let Component: FC<ButtonProps> = ({ variant, children, description, ...props }) => {
  
  const { theme } = useTheme();
  const { typography, button } = MakeButtonTheme(theme, variant);

  let Component = Trigger;
  
  Component = withDescription<ButtonProps>({ 
    Component, 
    description 
  });
  
  Component = withChildrenText<ButtonProps>({
    Component,
    children,
    style: typography,
  });

  return createElement(
    Component,
    { 
      ...props,
      className: props.className ? `button ${props.className} ${variant} button-${variant}` : `button ${variant} button-${variant}`,
      style: button 
    }
  );
};

Component = memo(Component);

export default Component;

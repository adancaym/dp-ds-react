import { createElement, FC, memo } from 'react';
import { Trigger, withChildrenText, withDescription, withStyle } from 'src/components';
import { MakeButtonTheme, useTheme } from 'src/theme';

import { ButtonProps } from './type';

let Button: FC<ButtonProps> = (props) => {
  
  const { variant = 'primary' , children, description } = props 

  const { theme } = useTheme();
  const { typography, button } = MakeButtonTheme(theme, props);

  let Component = Trigger;

  Component = withStyle({
    Component,
    style: button
  })
  
  Component = withDescription<ButtonProps>({ 
    Component, 
    description,
  });
  
  Component = withChildrenText<ButtonProps>({
    Component,
    children,
    style: typography,
  });

  const newprops = { 
    ...props,
    className: `button ${props.className ?? ''} ${variant} button-${variant}`,
  }

  
  return createElement(
    Component,
    newprops
  );
};

Button = memo(Button);

export default Button;

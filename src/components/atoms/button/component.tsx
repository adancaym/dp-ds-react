import { FC, memo } from 'react';
import { Trigger, withChildrenText, withDescription, withStyle } from 'src/components';
import { MakeButtonTheme, useTheme } from 'src/theme';

import { ButtonProps } from './type';

let Button: FC<ButtonProps> = (props) => {
  
  const { variant = 'primary' , children, description } = props 

  const { theme } = useTheme();
  const { typography, button } = MakeButtonTheme(theme, props);

  let TriggerButton = Trigger

  TriggerButton = withStyle({
    Component: TriggerButton,
    style: button
  })
  
  TriggerButton = withDescription({ 
    Component: TriggerButton,
    description,
  });
  
  TriggerButton = withChildrenText({
    Component: TriggerButton,
    children,
    style: typography,
  });

  const newprops = { 
    ...props,
    className: `${props.className ?? ''} ${variant} button-${variant}`,
  }

  return <TriggerButton {...newprops} />;
};

Button = memo(Button);

export default Button;

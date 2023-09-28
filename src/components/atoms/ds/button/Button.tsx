import { FC, memo } from 'react';
import { Trigger, withChildrenText, withDescription, withStyle, withThemeContext } from 'src/components';
import { MakeButtonTheme, useTheme } from 'src/theme';

import { ButtonProps } from './type';

let Button: FC<ButtonProps> = (props) => {
  
  const { color: variant = 'primary' , children, description, type = `button` } = props 

  const { theme } = useTheme();
  const buttonStyle = MakeButtonTheme(theme, props);

  let TriggerButton = withThemeContext({ Component: Trigger });

  TriggerButton = withStyle({
    Component: TriggerButton,
    style: buttonStyle.button
  })
  
  if(description) TriggerButton = withDescription({ 
    Component: TriggerButton,
    description,
  });
  
  if(children) TriggerButton = withChildrenText({
    Component: TriggerButton,
    children,
    style: buttonStyle.typography,
  });

  const newprops = { 
    ...props,
    className: `${props.className ?? ''} ${variant} button-${variant}`,
  }

  return <TriggerButton type={type} {...newprops} />;
};


Button = memo(Button);

export default Button;

import { IWith, IWithChildren, IWithStyle, Typography, withStyle } from 'src/components';
import { IComponent } from 'src/types';

interface IWithChildrenTextProps<T>
  extends IWith<T>,
    IWithStyle,
    IWithChildren {}

export const withChildrenText = <T extends IComponent>({ Component, children,  style }: IWithChildrenTextProps<T>) => (props: T) => {

  const TextChildren = withStyle({ Component: Typography, style });
  
  return (
    <Component {...props}> 
      <TextChildren as='span'>{children}</TextChildren>
    </Component>);
  };
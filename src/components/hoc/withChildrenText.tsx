import { type IWith, type IWithChildren, type IWithStyle, Text, withStyle } from 'src/components'
import { type IComponent } from 'src/types'

interface IWithChildrenTextProps<T>
  extends IWith<T>,
  IWithStyle,
  IWithChildren {}

export const withChildrenText = <T extends IComponent>({ Component, children, style }: IWithChildrenTextProps<T>) => (props: T) => {
  const TextChildren = withStyle({ Component: Text, style })

  return (
    <Component {...props}>
      <TextChildren as='span'>{children}</TextChildren>
    </Component>)
}

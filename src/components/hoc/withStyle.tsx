import { createElement } from 'react'
import { type IWith, type IWithStyle } from 'src/components'
import { type IComponent } from 'src/types'

type IWithStyleProps<T> = IWith<T> & IWithStyle

export const withStyle = <T extends IComponent>({ Component, style }: IWithStyleProps<T>) =>
  (props: T) => createElement(Component, { ...props, style })

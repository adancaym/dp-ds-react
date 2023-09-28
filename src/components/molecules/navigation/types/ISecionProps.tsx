import { type CSSProperties } from 'react'
import { type IComponent } from 'src/types'

import { type INavigationItem } from './INavigationItem'
import { type IPositionVariant } from './IPositionVariant'

export interface ISecionProps extends IComponent {
  children?: INavigationItem[]
  styles?: CSSProperties
  linkStyle?: CSSProperties
  position?: IPositionVariant
}

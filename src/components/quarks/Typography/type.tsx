import { type IWithChildren, type IWithElementType, type IWithStyle } from 'src/components'
import { type IComponent } from 'src/types'

export type IText =
  IComponent &
  IWithChildren &
  IWithStyle &
  IWithElementType

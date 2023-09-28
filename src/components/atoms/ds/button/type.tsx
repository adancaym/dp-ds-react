import { type IWithChildren, type IWithColortButton, type IWithDescription, type IWithSize, type IWithStyle } from 'src/components'
import { type IComponent } from 'src/types'

export type ButtonProps =
  IComponent &
  IWithSize &
  IWithChildren &
  IWithColortButton &
  IWithDescription &
  IWithStyle & {
    type?: 'submit' | 'reset' | 'button'
  }

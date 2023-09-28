import { type IReaderProps, type IWithDescription, type IWithError, type IWithLabel, type IWithPlaceholder } from 'src/components'
import { type IComponent } from 'src/types'

export type IInput =
  IReaderProps &
  IComponent &
  IWithPlaceholder &
  IWithDescription &
  IWithError &
  IWithLabel

import { type IPicker, type IWithDescription, type IWithError, type IWithLabel, type IWithStyle } from 'src/components'
import { type IComponent } from 'src/types'

export interface ISelect extends IComponent, IPicker, IWithStyle, IWithDescription, IWithLabel, IWithError {
}

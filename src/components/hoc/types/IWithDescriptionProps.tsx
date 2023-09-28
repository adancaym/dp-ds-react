import { type IWith, type IWithDescription, type IWithStyle } from 'src/components'

export interface IWithDescriptionProps<T> extends IWith<T>, IWithStyle, IWithDescription {

}

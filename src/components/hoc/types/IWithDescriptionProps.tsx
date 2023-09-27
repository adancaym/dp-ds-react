import { IWith, IWithDescription, IWithStyle } from 'src/components';

export interface IWithDescriptionProps<T> extends IWith<T>, IWithStyle, IWithDescription {
  
}

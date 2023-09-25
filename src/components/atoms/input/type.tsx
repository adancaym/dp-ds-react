import { IReaderProps, IWithDescription, IWithError, IWithLabel } from 'src/components';
import { IComponent } from 'src/types';


export type InputProps<T> = IReaderProps<T> &
  IComponent &
  IWithDescription &
  IWithError &
  IWithLabel;

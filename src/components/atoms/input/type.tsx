import { IReaderProps, IWithDescription, IWithError, IWithLabel, IWithPlaceholder } from 'src/components';
import { IComponent } from 'src/types';


export type InputProps<T> = IReaderProps<T> &
  IComponent &
  IWithPlaceholder &
  IWithDescription &
  IWithError &
  IWithLabel;

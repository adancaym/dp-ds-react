import { IReaderProps, IWithDescription, IWithError, IWithLabel, IWithPlaceholder } from 'src/components';
import { IComponent } from 'src/types';


export type IInput = 
  IReaderProps &
  IComponent &
  IWithPlaceholder &
  IWithDescription &
  IWithError &
  IWithLabel;

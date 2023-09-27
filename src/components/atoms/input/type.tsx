import { IReaderProps, IWithDescription, IWithError, IWithLabel, IWithPlaceholder } from 'src/components';
import { IComponent } from 'src/types';


export type InputProps = 
  IReaderProps &
  IComponent &
  IWithPlaceholder &
  IWithDescription &
  IWithError &
  IWithLabel;

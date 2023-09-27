import { IWithChildren, IWithElementType, IWithStyle } from 'src/components';
import { IComponent } from 'src/types';


export type IText =
  IComponent &
  IWithChildren &
  IWithStyle &
  IWithElementType
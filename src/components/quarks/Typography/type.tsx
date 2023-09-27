import { IWithChildren, IWithElementType, IWithStyle } from 'src/components';
import { IComponent } from 'src/types';


export type ITypography =
  IComponent &
  IWithChildren &
  IWithStyle &
  IWithElementType
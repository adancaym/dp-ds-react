import { IWithChildren, IWithDescription, IWithOnClick, IWithStyle, IWithVariantButton } from 'src/components';
import { IComponent } from 'src/types';

export type ButtonProps =
  IComponent &
  IWithChildren &
  IWithVariantButton &
  IWithOnClick &
  IWithDescription &
  IWithStyle & {
    type?: HTMLButtonElement['type'];
  }
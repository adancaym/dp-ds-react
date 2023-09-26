import { IWithChildren, IWithDescription, IWithOnClick, IWithSize, IWithStyle, IWithVariantButton } from 'src/components';
import { IComponent } from 'src/types';

export type ButtonProps = IComponent &
  IWithSize &
  IWithChildren &
  IWithVariantButton &
  IWithOnClick &
  IWithDescription &
  IWithStyle & {
    type?: HTMLButtonElement["type"];
  };

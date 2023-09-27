import { IWithChildren, IWithDescription, IWithSize, IWithStyle, IWithVariantButton } from 'src/components';
import { IComponent } from 'src/types';

export type ButtonProps = IComponent &
  IWithSize &
  IWithChildren &
  IWithVariantButton &
  IWithDescription &
  IWithStyle & {
    type?: HTMLButtonElement["type"];
  };

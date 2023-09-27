import { IWithChildren, IWithColortButton, IWithDescription, IWithSize, IWithStyle } from 'src/components';
import { IComponent } from 'src/types';

export type ButtonProps = IComponent &
  IWithSize &
  IWithChildren &
  IWithColortButton &
  IWithDescription &
  IWithStyle & {
    type?: HTMLButtonElement["type"];
  };

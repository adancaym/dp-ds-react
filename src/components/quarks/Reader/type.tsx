import { HTMLInputTypeAttribute } from 'react';
import { IWithOnChange, IWithStyle } from 'src/components/hoc';
import { IComponent } from 'src/types';

export type IReaderProps<T> =
  IComponent &
  IWithStyle &
  IWithOnChange<T> & {
    type?: HTMLInputTypeAttribute;
    value?: T;
    plaveholder?: string;
  };

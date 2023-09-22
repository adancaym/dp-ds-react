import { HTMLInputTypeAttribute } from "react";
import { IWithOnChange, IWithStyle } from "src/types";

export type IReaderProps<T> = IWithStyle &
  IWithOnChange<T> & {
    type: HTMLInputTypeAttribute;
    value?: T;
    plaveholder?: string;
  };

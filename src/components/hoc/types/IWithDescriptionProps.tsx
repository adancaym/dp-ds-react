import { IWithDescription, IWithStyle } from "src/types";
import { IWith } from "src/components";

export interface IWithDescriptionProps<T>
  extends IWith<T>,
    IWithStyle,
    IWithDescription {}

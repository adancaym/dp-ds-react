import { IWithDescription, IWithStyle } from "src/components";
import { IWith } from "src/components";

export interface IWithDescriptionProps<T>
  extends IWith<T>,
    IWithStyle,
    IWithDescription {}

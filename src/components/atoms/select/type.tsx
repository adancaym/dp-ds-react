import { IPicker, IWithDescription, IWithError, IWithLabel, IWithStyle } from "src/components";
import { IComponent } from "src/types";

export interface ISelect extends IComponent, IPicker, IWithStyle, IWithDescription, IWithLabel, IWithError {
}

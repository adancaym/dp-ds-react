import { IWithChildren, IWithOnClick, IWithStyle } from "../../hoc";
import { IComponent } from "src/types";

export interface IContainer extends 
IComponent, 
IWithStyle, 
IWithChildren, 
IWithOnClick {}


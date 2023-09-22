import { CSSProperties } from "react";
import { IPositionVariant } from "./IPositionVariant";
import { INavigationItem } from "./INavigationItem";

export interface ISecionProps {
  children: INavigationItem[];
  styles?: CSSProperties;
  linkStyle?: CSSProperties;
  position?: IPositionVariant;
}

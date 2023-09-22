import { CSSProperties } from "react";
import { IVariantButton } from "./IVariantButton";

export interface IButtonTheme extends CSSProperties {
  variant: IVariantButton;
}

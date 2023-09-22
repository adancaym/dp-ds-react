import { IBorderRadius } from "./IBorderRadius";
import { IColor } from "./IColor";
import { INeutral } from "./INeutral";

export interface IPalette {
  primary: IColor;
  secondary: IColor;
  warning: IColor;
  danger: IColor;
  success: IColor;
  info: IColor;
  neutral: INeutral;
  grey: IColor;
  text: IColor;
  borders: IBorderRadius;
}

import { IBorderRadius } from "./IBorderRadius";
import { IColor } from "./IColor";
import { INeutral } from "./INeutral";

/**
 * Interface for defining a color palette.
 */
export interface IPalette {
  /**
   * The primary color of the palette.
   */
  primary: IColor;

  /**
   * The secondary color of the palette.
   */
  secondary: IColor;

  /**
   * The warning color of the palette.
   */
  warning: IColor;

  /**
   * The danger color of the palette.
   */
  danger: IColor;

  /**
   * The success color of the palette.
   */
  success: IColor;

  /**
   * The info color of the palette.
   */
  info: IColor;

  /**
   * The neutral color of the palette.
   */
  neutral: INeutral;

  /**
   * The grey color of the palette.
   */
  grey: IColor;

  /**
   * The text color of the palette.
   */
  text: IColor;

  /**
   * The border radius of the palette.
   */
  borders: IBorderRadius;
}

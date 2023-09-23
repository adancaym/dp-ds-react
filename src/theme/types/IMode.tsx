/**
 * Interface representing a color mode with a dark and light palette.
 */
import { IPalette } from "./IPalette";

export interface IMode {
  /**
   * The dark palette for the color mode.
   */
  dark: IPalette;

  /**
   * The light palette for the color mode.
   */
  light: IPalette;
}

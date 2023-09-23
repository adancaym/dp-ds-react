import { IPalette } from "src/theme/types";

/**
 * Interface representing the context object used by the ThemeProvider.
 */
export type IThemeContextType = {
  /**
   * The current theme object.
   */
  theme: IPalette;
  /**
   * A function that sets the theme object.
   * @param theme - The new theme object to set.
   */
  setTheme: (theme: IPalette) => void;
};

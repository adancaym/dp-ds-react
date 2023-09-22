import { IPalette } from "src/theme/types";

export type IThemeContextType = {
  theme: IPalette;
  setTheme: (theme: IPalette) => void;
};

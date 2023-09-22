import { createContext, useState } from "react";
import { modes } from "../constants/modes";
import { IPalette } from "src/theme/types";
import { IThemeContextType } from "../types";

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContextType>({
  theme: modes.light,
  setTheme: (_: IPalette) => {},
});

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<IPalette>(modes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} children={children} />
  );
};

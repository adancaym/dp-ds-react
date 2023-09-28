import { IComponent } from "src/types";
import { IWith } from "src/components";
import { ThemeProvider } from "../../theme/providers/TehemeProvider";


export const withThemeContext = <T extends IComponent>({ Component }: IWith<T>) => (props: T) => (
  <ThemeProvider>
    <Component {...props} />
  </ThemeProvider>
)
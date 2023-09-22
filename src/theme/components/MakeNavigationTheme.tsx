import { IPalette } from "..";
import { IMakeNavigationTheme } from "src/theme/types";

export const MakeNavigationTheme = (
  pallete: IPalette
): IMakeNavigationTheme => ({
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: pallete.primary.main,
    color: pallete.text.dark,
  },
  section: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

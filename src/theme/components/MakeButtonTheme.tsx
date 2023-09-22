import { IPalette, IVariantButton } from "src/theme";

import {
  space,
  lineHeights,
  fontWeights,
  fonts,
  borderRadius,
} from "../constants";

export const MakeButtonTheme = (
  pallete: IPalette,
  variant: IVariantButton = "primary"
) => ({
  button: {
    outline: "none",
    backgroundColor: pallete[variant].main,
    color: pallete.text.main,
    fontFamily: fonts.body,
    fontSize: "1rem",
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small,
    borderRadius: borderRadius.small,
    borderColor: pallete[variant].main,
    width: "100%",
  },
  typography: {
    padding: `${space.small} ${space.medium}`,
  },
});

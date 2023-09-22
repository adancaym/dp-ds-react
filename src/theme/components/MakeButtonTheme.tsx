import { CSSProperties } from "react";

import { IPalette, IVariantButton } from "src/theme";
import { IWithVariantButton } from "src/types";

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
): CSSProperties & { typo: CSSProperties } & IWithVariantButton => ({
  variant: variant,
  outline: "none",
  backgroundColor: pallete[variant].main,
  color: pallete.text.main,
  fontFamily: fonts.body,
  fontSize: {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
  }.small,
  fontWeight: fontWeights.normal,
  lineHeight: lineHeights.small,
  borderRadius: borderRadius.small,
  borderColor: pallete[variant].main,
  width: "100%",
  typo: {
    padding: `${space.small} ${space.medium} ${space.small} ${space.medium}`,
  },
});

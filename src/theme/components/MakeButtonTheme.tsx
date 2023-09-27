import { IPalette } from 'src/theme';

import { borderRadius, fonts, fontWeights, lineHeights, sizes, space } from '../constants';
import { ButtonProps } from 'src/components';

export const MakeButtonTheme = (
  pallete: IPalette,
  { color: variant = "primary", size = 'full', style}: ButtonProps
) => ({
  button: {
    width: sizes[size],
    outline: "none",
    backgroundColor: pallete[variant].main,
    color: pallete.text.main,
    fontFamily: fonts.body,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small,
    borderRadius: borderRadius.small,
    borderColor: pallete[variant].main,
    margin: `${space.small} ${space.medium}`,
    ...style
  },
  typography: {
    color: pallete.text.main,
    fontFamily: fonts.body,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small,
  },
});

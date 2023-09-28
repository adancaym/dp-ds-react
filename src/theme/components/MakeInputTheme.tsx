import { type IInputTheme, type IPalette } from 'src/theme/types'
import { lineHeights, fontWeights, fonts, borderRadius } from '../constants'

export const MakeInputTheme: (_: IPalette) => IInputTheme = (
  pallete: IPalette
) => ({
  label: {
    fontFamily: fonts.body,
    color: pallete.text.main,
    fontSize: '1rem',
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small
  },
  input: {
    width: '100%',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid ' + pallete.grey.main,
    fontFamily: fonts.body,
    color: pallete.text.main,
    fontSize: '1rem',
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small,
    borderRadius: borderRadius.small,
    borderColor: pallete.grey.main,
    '&:focus': {
      outline: 'none'
    }
  },
  error: {
    fontFamily: fonts.body,
    color: pallete.danger.main,
    fontSize: '1rem',
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small
  },
  description: {
    fontFamily: fonts.body,
    color: pallete.text.main,
    fontSize: '1rem',
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.small
  }
})

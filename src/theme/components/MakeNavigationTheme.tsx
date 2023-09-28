import { type IMakeNavigationTheme } from 'src/theme/types'

import { type IPalette } from '..'

export const MakeNavigationTheme = (
  pallete: IPalette
): IMakeNavigationTheme => ({
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: pallete.primary.main,
    color: pallete.text.dark
  },
  section: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem',
    width: '100%'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    margin: '1rem 1rem'
  }
})

import { type IPalette } from 'src/theme'
import { type ITabsTheme } from '../types'

export const MakeTabsTheme = (pallete: IPalette): ITabsTheme => ({
  toolbar: {
    width: '100%',
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '2px'
  },
  tab: {
    padding: '.2em',
    width: '100%',
    border: `1px solid ${pallete.grey.main}`,
    textAlign: 'center',
    color: pallete.text.main,
    backgroundColor: pallete.primary.main,
    borderRadius: pallete.borders.small
  },
  tabActive: {
    padding: '.2em',
    width: '100%',
    border: `1px solid ${pallete.grey.main}`,
    textAlign: 'center',
    color: pallete.text.light,
    backgroundColor: pallete.primary.dark,
    borderRadius: pallete.borders.small
  },
  content: {
    minHeight: '100%'
  }
})

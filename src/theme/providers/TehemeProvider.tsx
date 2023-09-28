import { createContext, useMemo } from 'react'
import { modes } from '../constants/modes'
import { type IThemeContextType } from '../types'

interface IThemeProvider {
  children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContextType>({
  theme: modes.light
})

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const theme = useMemo(() => ({ theme: modes.light }), [])

  return (
    <ThemeContext.Provider value={theme} children={children} />
  )
}

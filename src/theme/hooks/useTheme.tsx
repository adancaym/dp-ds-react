import { useContext } from 'react'
import { ThemeContext } from '../providers/TehemeProvider'

export const useTheme = () => useContext(ThemeContext)

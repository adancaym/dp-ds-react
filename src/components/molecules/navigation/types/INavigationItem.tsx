import { type ReactNode } from 'react'
import { type INavigation } from './INavigation'

export type INavigationItem = ReactNode & {
  props: INavigation
}

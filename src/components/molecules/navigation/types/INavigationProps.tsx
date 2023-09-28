import { type RouteObject } from 'react-router-dom'
import { type IComponent } from 'src/types'

import { type INavigationItem } from './INavigationItem'

export interface INavigationProps extends IComponent {
  children?: INavigationItem[]
  router: RouteObject[]
}

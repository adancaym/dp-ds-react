import { NavigationItem } from 'src/components'
import { type IComponent } from 'src/types'

import { type IWithNavigation } from './types'
import Navigation from '../molecules/navigation/Navigation'

export const withNavigation = <T extends IComponent>({ Component, routes }: IWithNavigation<T>) => (props: T) =>
  (
  <>
    <Navigation router={routes}>
      {routes.map((route, index) => <NavigationItem {...route} key={route.path + index} />)}
    </Navigation>
    <Component {...props} />
  </>
  )

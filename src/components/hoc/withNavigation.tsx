import { NavigationItem } from 'src/components'
import { type IComponent } from 'src/types'
import { v4 } from 'uuid'

import { type IWithNavigation } from './types'
import Navigation from '../molecules/navigation/Navigation'

export const withNavigation = <T extends IComponent>({ Component, routes }: IWithNavigation<T>) => (props: T) =>
  (
  <>
    <Navigation router={routes}>
      {routes.map((route, index) => (

        <NavigationItem {...route} key={`${route.path}-${v4()}-navigation-item`} />

      )
      )}
    </Navigation>
    <Component {...props} />
  </>
  )

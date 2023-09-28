import { Children, type FC } from 'react'
import { type IComponent } from 'src/types'

import { type IWithChildren } from './types'

export const WithStringChildren =
  <T extends IComponent & IWithChildren>(Component: FC<T>) =>
    (props: T) => {
      const { children } = props
      const hasString = Children.toArray(children).every(
        (e) => typeof e !== 'string'
      )
      if (hasString) throw new Error('Component no have string children')

      return <Component {...props} />
    }

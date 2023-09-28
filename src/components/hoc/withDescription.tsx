import { Text, withStyle } from 'src/components'
import { type IComponent } from 'src/types'

import { type IWithDescriptionProps } from './types/IWithDescriptionProps'

export const withDescription = <T extends IComponent>({ Component, description, style }: IWithDescriptionProps<T>) => (props: T) => {
  const Description = withStyle({ Component: Text, style })

  return <>
      <Component {...props} />
      {description && <Description className='description'>{description}</Description>}
    </>
}

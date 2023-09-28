import { type IWith, type IWithLabel, type IWithStyle, Text, withStyle } from 'src/components'
import { type IComponent } from 'src/types'

type IWithLabelProps<T> = IWith<T> & IWithStyle & IWithLabel

export const withLabel = <T extends IComponent>({ Component, style, label }: IWithLabelProps<T>) => (props: T) => {
  const Label = withStyle({ Component: Text, style })

  return <>
      { label && <Label as='label' className='label'>{label}</Label> }
      <Component {...props} />
    </>
}

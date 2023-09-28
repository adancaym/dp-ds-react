import { Children } from 'react'
import { Container, type INavigationItem, type ISecionProps } from 'src/components'

export const Section = ({
  children = [],
  styles,
  position = 'left',
  ...props
}: ISecionProps) => (
  <Container
    style={styles}
    children={Children.map(children, (item: INavigationItem) => item).filter(
      ({ props: { position: pos } }) => pos === position
    )}
    {...props}
  />
)

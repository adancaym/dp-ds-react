import React from 'react'

import { type IContainer } from './type'

const Container: React.FC<IContainer> = (props: IContainer) => {
  const role = props.role ?? 'container'
  const className = `container ${props.className ?? ''}`

  return <div {...props} role={role} className={className}/>
}

export default Container

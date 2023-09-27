import React from 'react';

import { IContainer } from './type';


let Container: React.FC<IContainer> = ( props: IContainer) => {

  const role = props.role ?? `container`
  const className = `container ${props.className ?? ''}`

  return <div {...props} role={role} className={className}/>
}

export default Container;


import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IContainer } from './type';

type TypeContainer = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

let Component: React.FC<IContainer & TypeContainer> = ( props: IContainer) => {

  const role = props.role ?? `container`
  const className = `container ${props.className ?? ''}`

  return <div {...props} role={role} className={className}/>
}

export default Component;


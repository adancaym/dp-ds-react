import { type DetailedHTMLProps, type HTMLAttributes } from 'react'
import { type IComponent } from 'src/types'

import { type IWithChildren, type IWithStyle } from '../../hoc'

export interface TypeContainer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export interface IContainer extends
  TypeContainer,
  IComponent,
  IWithStyle,
  IWithChildren {

}

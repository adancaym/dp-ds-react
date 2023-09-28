import type React from 'react'
import { type IComponent } from 'src/types'

import { type IWithChildren, type IWithStyle } from '../../hoc'

interface TypeTrigger extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface ITrigger extends
  TypeTrigger,
  IComponent,
  IWithStyle,
  IWithChildren { }
